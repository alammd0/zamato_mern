

import express from "express";
import { authFoodPartnerMiddleware, authUserMiddleware } from "../middlewares/auth.middleware.js";
import { createFoodPost, getAllFoodPosts, getFoodPost } from "../controllers/food.post.controller.js";
import multer from "multer";
import { likeFoodPost } from "../controllers/post.like.controller.js";
import { commentFoodPost } from "../controllers/post.comment.controller.js";
import { getAllComments } from "../controllers/reel.comment.controller.js";
import { saveFoodPost } from "../controllers/post.save.controller.js";

const upload = multer({
    storage : multer.memoryStorage()
})

const router = express.Router();

router.post("/", authFoodPartnerMiddleware, upload.array("images"), createFoodPost);
router.get("/all", getAllFoodPosts);
router.get("/:id", getFoodPost);

router.post("/like", authUserMiddleware, likeFoodPost);
router.post("/comment", authUserMiddleware, commentFoodPost);
router.get("/comments", authUserMiddleware, getAllComments);
router.post("/save", authUserMiddleware, saveFoodPost);

export default router;