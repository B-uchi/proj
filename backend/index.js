import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'
import adminRoutes from './routes/admin.js'
dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

// Routing
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/admin', adminRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
