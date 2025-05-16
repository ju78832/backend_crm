import { PrismaClient } from "../generated/prisma/index.js";
import express from "express";
import { config } from "dotenv";
import morgan from "morgan";

const prisma = new PrismaClient();

config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Insurance Claims API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Routes

const userProfileRoutes = require("./userProfileRoutes");
const customerRoutes = require("./customerRoutes");
const employeeRoutes = require("./employeeRoutes");
const claimRoutes = require("./claimRoutes");
const policyTypeRoutes = require("./policyTypeRoutes");
