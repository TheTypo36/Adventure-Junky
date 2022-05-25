import express from "express";
import { getBlogs, createBlog } from "../controllers/blogController.js";

const router = express.Router();
console.log("in the blog route");
router.get("/", getBlogs);
router.get("/create", createBlog);
export default router;
