import Link from "../model/Link.js";

export const shGet = async (req, res) => {
    try {
        const links = await Link.find();
        return res.status(200).json(links);
    } catch (error) {
        return res.status(404).json(error);
    }
};

export const goLink = async (req, res) => {
    try {
        const link = await Link.findById(req.params.id);
        return res.status(302).redirect(link.target);
    } catch (error) {
        return res.status(404).json(error);
    }
};
