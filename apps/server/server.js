// server.js
// Trust Aesthetic Portfolio API
// Express + CORS configuration for local and cloud deployment (Render)

// Import dependencies
const express = require("express");
const cors = require("cors");

// Initialize app
const app = express();

// Environment variables or defaults
const PORT = process.env.PORT || 10000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Trust Aesthetic API",
    environment: process.env.NODE_ENV || "local",
  });
});

// Example projects route
app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      name: "SIEMplicity",
      focus: "Incident Response Automation",
      stack: "AWS Lambda, S3, GuardDuty, EventBridge",
    },
    {
      id: 2,
      name: "Network Defense Lab",
      focus: "Blue Team Simulation & Detection Engineering",
      stack: "VirtualBox, Windows Server, Wazuh SIEM",
    },
    {
      id: 3,
      name: "SOC it to 'EM SIEMlessly",
      focus: "Cloud SOC Automation via EventBridge + Lambda",
      stack: "AWS Security Hub, Python, Terraform",
    },
  ]);
});

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Trust Aesthetic API 🌐");
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});