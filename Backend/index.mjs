<<<<<<< Updated upstream:Backend/index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
=======
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3001;
const client = new MongoClient("your_mongo_db_connection_string");
>>>>>>> Stashed changes:Backend/index.mjs

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

// Sample route to check if server is working
app.get("/", (req, res) => res.send("Server is ready"));

// Define the server port
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});