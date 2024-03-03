const firebase = require("firebase-admin");
const serviceCred = require("./service.json");
const { initializeApp } = require("firebase-admin/app"); // Import initializeApp method
const { getFirestore } = require("firebase-admin/firestore");
require("dotenv").config();

// Initialize Firebase app first

initializeApp({
  credential: firebase.credential.cert({
    private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n"),
    private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEYID,
    project_id: process.env.PROJECT_ID,
    ...serviceCred,
  }),
  storageBucket: process.env.STORAGE_BUCKET,
});
const defaultFirestore = getFirestore();

module.exports = defaultFirestore;
