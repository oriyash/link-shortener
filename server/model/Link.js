import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    target: {
        type: String,
        required: true,
        createdAt: new Date(),
    },
});

export default mongoose.model("Link", linkSchema);