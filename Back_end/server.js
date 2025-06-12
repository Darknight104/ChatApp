import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";  // Ensure the correct path
import MessageRoutes from './routes/message.route.js'
import connectToMongoDb from "./Db/connecttoMongoDb.js";
import userRoutes from "./routes/user.route.js";  


const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();
app.use(express.json()); //parse the incoimg payloads from req.body
app.use(cookieParser());

// app.use(express.json());
 // Required for handling JSON requests

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/auth", authRoutes); 
app.use("/api/messages", MessageRoutes); 
app.use("/api/users", userRoutes); 
 // Base route for all auth endpoints

app.listen(PORT, () => {
  connectToMongoDb()
  console.log(`Server is running on port ${PORT}`)
});
