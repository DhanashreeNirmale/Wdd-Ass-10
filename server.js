const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Application Deployed Successfully");
});


app.get("/status", (req, res) => {
  res.json({
    status: "running",
    environment: ENV
  });
});

app.get("/info", (req, res) => {
  res.json({
    name: "My Express App",
    version: "1.0.0",
    author: "Dhanashree",
    environment: ENV
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} mode`);
});