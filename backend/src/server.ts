import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./db";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health Check
app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");

    res.status(200).json({
      status: "ok",
      database: "connected",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      database: "disconnected",
    });
  }
});

// Get all notices
app.get("/api/notices", async (_req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, title, description, category, created_at FROM notices ORDER BY created_at DESC"
    );

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch notices",
    });
  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Nexora Campus API running on port ${PORT}`);
});