import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import dbConnection from "./db/dbConnection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;



app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.end("Hello");
});

app.listen(PORT, () => {
  dbConnection();
  console.log(`app is working on port ${PORT}`);
});
