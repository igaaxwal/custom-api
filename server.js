const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample data (mock database)
let data = [
  { id: 1, name: "John Doe", value: 123 },
  { id: 2, name: "Jane Smith", value: 456 },
  { id: 3, name: "Alice Johnson", value: 789 },
];

// API Routes
app.get("/api/data", (req, res) => {
  res.json(data);
});

// Add new data (POST request)
app.post("/api/data", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).json({ message: "Data added successfully", data });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
