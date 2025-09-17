import express from "express";
import { authFoodPartnerMiddleware } from "../middlewares/auth.middleware.js";
import { createFoodPost, getAllFoodPosts, getFoodPost } from "../controllers/food.post.controller.js";
import multer from "multer";

const upload = multer({
    storage : multer.memoryStorage()
})

const router = express.Router();

router.post("/", authFoodPartnerMiddleware, upload.single("file"), createFoodPost);
router.get("/all", authFoodPartnerMiddleware, getAllFoodPosts);
router.get("/:id", authFoodPartnerMiddleware, getFoodPost);

export default router;