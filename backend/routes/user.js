import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  completeKYC,
  completeSignup,
  createTicket,
  createDepositTransaction,
  editProfile,
  getTickets,
  getTransactions,
  getWallet,
  getDeposits,
} from "../controllers/user.js";

const router = express.Router();

router.post("/completeSignup", verifyToken, completeSignup);
router.post("/editProfile", verifyToken, editProfile);
router.post("/createTicket", verifyToken, createTicket);
router.post("/completeKYC", verifyToken, completeKYC);
router.get("/getTickets", verifyToken, getTickets);
router.get("/getWallet", verifyToken, getWallet);
router.post("/createDepositTransaction", verifyToken, createDepositTransaction);
router.get("/getTransactions", verifyToken, getTransactions);
router.get("/getDeposits", verifyToken, getDeposits);

export default router;
