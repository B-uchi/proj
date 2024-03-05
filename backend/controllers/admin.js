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
    if (!transaction.exists) {
      res.status(400).json({ message: "Transaction does not exist" });
    } else {
      const data = transaction.data();
      if (data.status === "Pending") {
        await transactionRef.update({
          status: "Completed",
          verifiedBy: req.uid,
          verifiedAt: FieldValue.serverTimestamp(),
        });
        res.status(200).json({ message: "Transaction verified" });
      } else {
        res.status(400).json({ message: "Transaction has already been verified" });
      }
    }
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
}