import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/message", (_req, res) => {
  res.json({
    title: "React + Node App",
    message: "Frontend and backend are connected successfully."
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({
      error: "Email and password are required."
    });
  }

  const DEMO_EMAIL = "demo@local.dev";
  const DEMO_PASSWORD = "pass1234";

  if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    return res.status(401).json({
      error: "Invalid email or password."
    });
  }

  return res.json({
    message: "Login successful.",
    user: {
      email: DEMO_EMAIL,
      name: "Demo User"
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
