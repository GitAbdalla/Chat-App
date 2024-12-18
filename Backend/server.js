import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dbConnection from "./db/dbConnection.js";
import { app, server } from "./socket/socket.js";

dotenv.config();


const PORT = process.env.PORT;


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.end("Hello");
});

server.listen(PORT, () => {
  dbConnection();
  console.log(`app is working on port ${PORT}`);
});
