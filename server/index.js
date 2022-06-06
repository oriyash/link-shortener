import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// init
const app = express();

// important consts
const PORT = 5000;
const dbUrl =
    "mongodb+srv://admin:ZvhTCJjBPi3ApbhJ@cluster0.ah497.mongodb.net/?retryWrites=true&w=majority";

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
app.get("/", (req, res) => {
    res.send("Hello World");
});

// starting server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
