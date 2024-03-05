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
      "https://proj-lake-seven.vercel.app", "http://localhost:5173"
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

// Routing
app.post("/confirmRedirect", (req, res) => {
  const { idToken } = req.body;
  res.cookie('firebaseAuthToken', idToken, {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    secure: true, // Only send the cookie over HTTPS
    sameSite: 'none' // Allow cross-site usage
  });

  // Redirect to the desired URL
  res.redirect("https://proj-dash.vercel.app");
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.get("/", () => {
  return res.status(200).json({ message: "Welcome to the backend" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
