import Link from "../model/Link.js";

export const shPost = async (req, res) => {
    try {
        const target = req.body.target.trim();

        const linkCheck = await Link.findOne({ target: target });

        // NEED TO ADD HTTP:// CHECK

        if (linkCheck != null) {
            return res.status(200).json({
                shURL: `http://localhost:5000/sh/${linkCheck._id}`,
            });
        } else {
            const newLink = new Link({
                target: target,
            });

            const link = await newLink.save();

            return res.status(201).json({
                shURL: `http://localhost:5000/sh/${link._id}`,
            });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};
