// Trust Aesthetic Portfolio API
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 10000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Trust Aesthetic API 🌐");
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Trust Aesthetic API",
    environment: process.env.NODE_ENV || "local",
  });
});

// Example route
app.get("/api/projects", (req, res) => {
  res.json([
    { id: 1, name: "SIEMplicity", focus: "Incident Response Automation" },
    { id: 2, name: "Network Defense Lab", focus: "Blue Team Simulation" },
  ]);
});

// Catch-all fallback to ensure API routes resolve correctly
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});