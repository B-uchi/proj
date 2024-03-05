import { getAuth } from "firebase-admin/auth";
import pkg from "../util/firebase/config.cjs";
const { defaultFirestore } = pkg;
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const db = getFirestore();

export const completeSignup = async (req, res) => {
  console.log("req received to completeSignup");
  const auth = getAuth();
  const { firstName, lastName, phoneNumber, location } = req.body;
  try {
    const userRef = db.collection("users").doc(req.uid);
    await userRef
      .set(
        {
          profileComplete: true,
          firstName,
          isAdmin: false,
          lastName,
          location,
          phoneNumber,
          wallets: [
            {
              currency: "US Dollar",
              symbol: "USD",
              availableBalance: 0,
              totalDeposit: 0,
              totalWithdrawal: 0,
              totalOrder: 0,
              status: "Active",
            },
            {
              currency: "Bitcoin",
              symbol: "BTC",
              availableBalance: 0,
              totalDeposit: 0,
              totalWithdrawal: 0,
              totalOrder: 0,
              status: "Inactive",
            },
            {
              currency: "Ethereum",
              symbol: "ETH",
              availableBalance: 0,
              totalDeposit: 0,
              totalWithdrawal: 0,
              totalOrder: 0,
              status: "Inactive",
            },
            {
              currency: "Litecoin",
              symbol: "LTC",
              availableBalance: 0,
              totalDeposit: 0,
              totalWithdrawal: 0,
              totalOrder: 0,
              status: "Inactive",
            },
            {
              currency: "Solana",
              symbol: "SOL",
              availableBalance: 0,
              totalDeposit: 0,
              totalWithdrawal: 0,
              totalOrder: 0,
              status: "Inactive",
            },
          ],
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      )
      .then(async () => {
        const doc = await userRef.get();
        return res
          .status(200)
          .json({ message: "Signup completed successfully", user: doc.data() });
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const editProfile = async (req, res) => {
  console.log("req received to editProfile");
  const { firstName, lastName, phoneNumber, location, username } = req.body;
  try {
    const userRef = db.collection("users").doc(req.uid);
    await userRef
      .set(
        {
          firstName,
          lastName,
          phoneNumber,
          location,
          username,
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      )
      .then(async () => {
        const doc = await userRef.get();
        return res
          .status(200)
          .json({ message: "Profile updated successfully", user: doc.data() });
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const completeKYC = async (req, res) => {
  console.log("req received to completeKYC");
  const { dlNumber, gender, ssn, annualIncome, employmentStatus, idUrl } =
    req.body;
  try {
    const userRef = db.collection("users").doc(req.uid);
    await userRef
      .set(
        {
          kycComplete: true,
          kyc: {
            ssn: ssn && ssn,
            gender,
            dlNumber: dlNumber && dlNumber,
            ssn,
            employmentStatus,
            annualIncome,
            idUrl,
          },
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      )
      .then(async () => {
        userRef.get().then((snapshot) => {
          const wallets = snapshot.data().wallets;
          const updatedWallets = wallets.map((wallet) => {
            if (wallet.status === "Inactive") {
              return { ...wallet, status: "Active" };
            } else {
              return wallet;
            }
          });
          userRef.update({ wallets: updatedWallets }).then(() => {
            return res
              .status(200)
              .json({ message: "KYC completed successfully" });
          });
        });
      });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const getTickets = (req, res) => {
  console.log("req received to getTickets");
  const tickets = [];
  db.collection("tickets")
    .where("userId", "==", req.uid)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        tickets.push({ id: doc.id, ...doc.data() });
      });
      return res.status(200).json(tickets);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

export const createTicket = async (req, res) => {
  console.log("req received to createTicket");
  const { subject, body } = req.body;
  try {
    const ticketRef = db.collection("tickets").doc();
    await ticketRef
      .set(
        {
          subject,
          body,
          status: "Open",
          reply: [],
          userId: req.uid,
          createdAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      )
      .then(async () => {
        const doc = await ticketRef.get();
        return res.status(200).json({ message: "Ticket created successfully" });
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getWallet = async (req, res) => {
  console.log("req received to getWallet");
  let wallet;
  try {
    const walletRef = db
      .collection("wallets")
      .where("currency", "==", "BTC")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          wallet = { id: doc.id, ...doc.data() };
        });
        return res.status(200).json({ wallet: wallet.walletAddress });
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createDepositTransaction = async (req, res) => {
  console.log("req received to createTransaction");
  const { depositAmtInUSD, depositMethod, depositAmt } = req.body;
  try {
    const transactionRef = db.collection("transactions").doc();
    await transactionRef
      .set(
        {
          userId: req.uid,
          transactionId: transactionRef.id,
          amountInUSD: depositAmtInUSD,
          amount: depositAmt,
          wallet: "USD",
          transactionType: "Deposit",
          depositMethod,
          status: "Pending",
          createdAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      )
      .then(async () => {
        const doc = await transactionRef.get();
        return res
          .status(201)
          .json({ message: "Transaction created successfully" });
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getTransactions = async (req, res) => {
  console.log("req received to getTransactions");
  const transactions = [];
  try {
    const transactionRef = db.collection("transactions");
    const snapshot = await transactionRef.where("userId", "==", req.uid).get();
    snapshot.forEach((doc) => {
      transactions.push({ id: doc.id, ...doc.data() });
    });
    return res.status(200).json({ transactions });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getDeposits = async (req, res) => {
  console.log("req received to getDeposits");
  const deposits = [];
  try {
    const transactionRef = db.collection("transactions");
    const snapshot = await transactionRef
      .where("userId", "==", req.uid)
      .where("transactionType", "==", "Deposit")
      .get();
    snapshot.forEach((doc) => {
      deposits.push({ id: doc.id, ...doc.data() });
    });
    return res.status(200).json({ deposits });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getWithdrawals = async (req, res) => {
  console.log("req received to getWithdrawals");
  const withdrawals = [];
  try {
    const transactionRef = db.collection("transactions");
    const snapshot = await transactionRef
      .where("userId", "==", req.uid)
      .where("transactionType", "==", "Withdrawal")
      .get();
    snapshot.forEach((doc) => {
      withdrawals.push({ id: doc.id, ...doc.data() });
    });
    return res.status(200).json({ withdrawals });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createWithdrawalTransaction = async (req, res) => {
  console.log("req received to createWithdrawalTransaction");
  const { withdrawalAmt, withdrawalAmtInBtc, userWallet } = req.body;
  try {
    const userRef = db.collection("users").doc(req.uid);
    const user = await userRef.get();
    if (user.data().wallets[0].availableBalance < withdrawalAmt) {
      return res.status(400).json({ message: "Insufficient balance" });
    }
    const transactionRef = db.collection("transactions").doc();
    await transactionRef
      .set(
        {
          userId: req.uid,
          transactionId: transactionRef.id,
          amountInUSD: withdrawalAmt,
          depositMethod,
          wallet: "USD",
          amount: Number(withdrawalAmtInBtc),
          transactionType: "Withdrawal",
          userWallet,
          status: "Pending",
          createdAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      )
      .then(async () => {
        userRef.set(
          {
            wallets: user.data().wallets.map((wallet) => {
              if (wallet.currency === "US Dollar") {
                wallet.availableBalance -= withdrawalAmt;
                wallet.totalWithdrawal += withdrawalAmt;
              }
              return wallet;
            }),
          },
          { merge: true }
        );
        return res
          .status(201)
          .json({ message: "Transaction created successfully" });
      });
  } catch (error) {
    console.log("error", error);
    res.status(400).json(error);
  }
};
