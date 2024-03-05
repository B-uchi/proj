import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getTransactions, getUsers, verifyDeposit } from "../controllers/admin.js";


const router = express.Router();

router.get("/getUsers", verifyToken, getUsers);
router.get("/getTransactions", verifyToken, getTransactions);
router.post("/verifyDeposit", verifyToken, verifyDeposit);

export default router;
