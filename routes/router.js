import express from "express";
import { renderAbout, renderHome, renderProjects } from "../controllers/pageController.js";

const router = express.Router();

router.get("/", renderHome);
router.get("/about", renderAbout);
router.get("/projects", renderProjects);

export default router;