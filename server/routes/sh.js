import { Router } from "express";

// importing controllers
import { goLink, shGet } from "../controllers/shGet.js";
import { shPost } from "../controllers/shPost.js";

const router = new Router();

router.get("/", shGet);
router.get("/:id", goLink);

router.post("/", shPost);

export default router;
