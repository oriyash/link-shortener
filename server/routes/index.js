import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
    return res.status(200).send("Hello World!");
});

export default router;
