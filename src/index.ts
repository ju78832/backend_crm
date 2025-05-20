import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import { PrismaClient } from "./generated/prisma/client.js";
import ApiRoutes from "./routes/index.js";

config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use("/api", ApiRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Insurance Claims API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
