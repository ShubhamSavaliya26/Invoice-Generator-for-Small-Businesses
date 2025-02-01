const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Enable CORS with specific configuration
app.use(
  cors({
    origin: "http://localhost:3001", // Frontend React app's URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const invoiceRoutes = require("./routes/invoiceRoutes");
app.use("/api/invoices", invoiceRoutes);

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/invoiceDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
