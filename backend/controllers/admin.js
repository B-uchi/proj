import { getAuth } from "firebase-admin/auth";
import pkg from "../util/firebase/config.cjs";
const { defaultFirestore } = pkg;
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";

const db = getFirestore();

export const getUsers = async (req, res) => {
  try {
    const users = [];
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();
    snapshot.forEach((doc) => {
      users.push(doc.data());
    });
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = [];
    const transactionsRef = db.collection("transactions");
    const snapshot = await transactionsRef.get();
    snapshot.forEach((doc) => {
      transactions.push(doc.data());
    });
    res.status(200).json({ transactions });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const verifyDeposit = async (req, res) => {
  try {
    const { transactionId } = req.body;
    const transactionRef = db.collection("transactions").doc(transactionId);
    const transaction = await transactionRef.get();
    const userRef = db.collection("users").doc(transaction.data().userId);
    if (!transaction.exists) {
      res.status(400).json({ message: "Transaction does not exist" });
    } else {
      const data = transaction.data();
      if (data.status === "Pending") {
        await transactionRef
          .update({
            status: "Completed",
            verifiedBy: req.uid,
            verifiedAt: FieldValue.serverTimestamp(),
          })
          .then(() => {
            userRef.set(
              {
                wallets: user.data().wallets.map((wallet) => {
                  if (wallet.currency === "US Dollar") {
                    wallet.availableBalance += transaction.data().amountInUSD;
                  }
                  return wallet;
                }),
                currentPlan: data.planName,
              },
              { merge: true }
            );
            initiatePlan(userRef)
          });
        res.status(200).json({ message: "Transaction verified" });
      } else {
        res
          .status(400)
          .json({ message: "Transaction has already been verified" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const initiatePlan = (userRef) => {
  userRef.se

}

export const verifyWithdrawal = async (req, res) => {
  try {
    const { transactionId } = req.body;
    const transactionRef = db.collection("transactions").doc(transactionId);
    const transaction = await transactionRef.get();
    const userRef = db.collection("users").doc(transaction.data().userId);
    if (!transaction.exists) {
      res.status(400).json({ message: "Transaction does not exist" });
    } else {
      if (transaction.data().status === "Completed") {
        return res.status(400).json({
          message: "Transaction has already been verified",
        });
      }
      const data = transaction.data();
      if (data.status === "Pending") {
        await transactionRef
          .update({
            status: "Completed",
            verifiedBy: req.uid,
            verifiedAt: FieldValue.serverTimestamp(),
          })
          .then(() => {
            userRef.set(
              {
                wallets: user.data().wallets.map((wallet) => {
                  if (wallet.currency === "US Dollar") {
                    wallet.availableBalance -= transaction.data().amountInUSD;
                    wallet.totalWithdrawal += transaction.data().amountInUSD;
                  }
                  return wallet;
                }),
              },
              { merge: true }
            );
          });
        res.status(200).json({ message: "Transaction verified" });
      } else {
        res
          .status(400)
          .json({ message: "Transaction has already been verified" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
