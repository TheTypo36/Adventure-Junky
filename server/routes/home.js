import express from "express";
import { home } from "../controllers/homeController.js";
import blog from "./blog.js";
const router = express.Router();

router.get("/", home);
router.get("/blogs", blog);
export default router;
