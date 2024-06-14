import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to zigwheels");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening on port ${PORT}`);
});
 