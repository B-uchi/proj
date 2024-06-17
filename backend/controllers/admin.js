import pkg from "../util/firebase/config.cjs";
const { defaultFirestore } = pkg;
import {
  getFirestore,
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
    const user = await userRef.get();
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
                    wallet.availableBalance += Number(
                      transaction.data().amountInUSD
                    );
                  }
                  return wallet;
                }),
                currentPlan: data.planName,
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

export const addProfit = async (req, res) => {
  try {
    const { userId, percentage } = req.body;
    const userRef = db.collection("users").doc(userId);
    const user = await userRef.get();
    const wallets = user.data().wallets;
    const profit = (wallets[0].availableBalance * percentage) / 100;
    await userRef.set(
      {
        activePlan: {
          earnings: user.data().activePlan.earnings + profit,
        },
        wallets: wallets.map((wallet) => {
          if (wallet.currency === "US Dollar") {
            wallet.availableBalance += profit;
          }
          return wallet;
        }),
      },
      { merge: true }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

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

export const getStats = async (req, res) => {
  console.log('req received to getStats')
  try {
    let totalDeposit = 0
    let totalBTCDeposit = 0
    let totalUsers = 0
    let activeWallets = 0
    let pendingTransactions = 0

    const transactionCollectionRef = db.collection('transactions')
    const userCollectionRef = db.collection('users')
    const usersSnapshot = await userCollectionRef.get()
    const transactionSnapshot = await transactionCollectionRef.get()
    const walletRef = db.collection('wallets')
    const walletSnapshot = await walletRef.get()
    transactionSnapshot.docs.map((doc)=>{
      const data = doc.data()
      if (data.status.toLowerCase() == 'pending'){
        pendingTransactions += 1
      }else if (data.transactionType.toLowerCase() == 'deposit'){
        if (data.status.toLowerCase() == 'completed'){
          totalDeposit+=data.amountInUSD
          totalBTCDeposit = data.amountInBTC ? totalBTCDeposit + data.amountInBTC : totalBTCDeposit
        }
      }

    })
    totalUsers = usersSnapshot.size
    activeWallets = walletSnapshot.size
    return res.status(200).json({totalDeposit, totalBTCDeposit, totalUsers, pendingTransactions, activeWallets})
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message });
  }
};
