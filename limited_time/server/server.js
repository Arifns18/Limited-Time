import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;
const app = express();

app.use(cors());
app.use(express.json());

// 🔹 Connect to Postgres
const pool = new Pool({
  user: "postgres",       // your postgres username
  host: "localhost",
  database: "postgres",     // your db name
  password: "postgres123",     // your postgres password
  port: 5431,
});

// 🔹 Create table if not exists
async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE
    );
  `);
  console.log("✅ Users table ready");
}
initDB();

// 🔹 API: Get all users
app.get("/api/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users ORDER BY id");
  res.json(result.rows);
});

// 🔹 API: Add new user
app.post("/api/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add user" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
