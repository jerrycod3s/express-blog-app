import express, { Router } from "express";
import {
    getAllPosts,
    createNewBlogPost,
    findBlogPost,
    editPost,
    createOrUpdatePost,
    deletePost
} from "../controllers/blogControllers.js"

const router = express.Router();

router.get("/", getAllPosts);
router.get("/create", createNewBlogPost);
router.get("/blog/:id", findBlogPost);
router.get("/edit/blog/:id", editPost);
router.post("/create-post/:id", createOrUpdatePost);
router.post("/delete/:id", deletePost);

export default router;