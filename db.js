const mongoose = require("mongoose");
require("dotenv").config()
// Define the MongoDB connection URL (with database name)
//const mongoURL = "mongodb://localhost:27017/hotels";
const mongoURL = process.env.MONGOLOCAL_URL
//const mongoURL = process.env.MONGODB_URL
// Setup MongoDB connection
mongoose.connect(mongoURL);

// Get default connection
const db = mongoose.connection;

// Event listeners
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB server");
});

// Export the MongoDB Connection
module.exports = db;
