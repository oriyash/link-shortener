import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
    {
        target: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Link", linkSchema);
