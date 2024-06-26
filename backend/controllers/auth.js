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

export const verifyUser = async (req, res) => {
  console.log("req received ");
  const { idToken } = req.body;
  try {
    await getAuth()
      .verifyIdToken(idToken)
      .then(async (decodedToken) => {
        const uid = decodedToken.uid;
        const userRef = db.collection("users").doc(uid);
        const doc = await userRef.get();
        if (!doc.exists) {
          return res.status(400).json({ message: "User not found" });
        } else {
          res.status(200).json({ message: "User verified", user: doc.data() });
        }
      });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message });
  }
};
