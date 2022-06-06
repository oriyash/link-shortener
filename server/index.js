// importing deps
import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// importing routes
import shRoutes from "./routes/sh.js";
import indexRoutes from "./routes/index.js";

// init
const app = express();

// important consts
const PORT = process.env.PORT;
const dbUrl = process.env.DBURL;

// connest to db
try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB via Mongoose");
} catch (error) {
    console.log(error);
}

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/", indexRoutes);
app.use("/sh", shRoutes);

// starting server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
