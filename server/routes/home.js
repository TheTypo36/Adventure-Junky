import express from "express";
import { home } from "../controllers/homeController.js";
import blog from "./blog.js";
const router = express.Router();
console.log("in the home route");

router.get("/", home);
router.use("/blogs", blog);
export default router;
