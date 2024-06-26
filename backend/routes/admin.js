import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  addProfit,
  getStats,
  getTransactions,
  getUsers,
  getWallets,
  verifyDeposit,
} from "../controllers/admin.js";

const router = express.Router();

router.get("/getUsers", verifyToken, getUsers);
router.get("/getTransactions", verifyToken, getTransactions);
router.get("/getWallets", verifyToken, getWallets);
router.post("/verifyDeposit", verifyToken, verifyDeposit);
router.post("/addProfit", verifyToken, addProfit);
router.get('/getStats', verifyToken, getStats)

export default router;
