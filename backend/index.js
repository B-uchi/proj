import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";
dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: [
      "https://proj-dash.vercel.app",
      "https://proj-lake-seven.vercel.app",
      "http://localhost:5173",
      "http://localhost:5174",
    ]
  })
);


app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to the backend" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
