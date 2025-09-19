import express from "express";
import { authFoodPartnerMiddleware, authUserMiddleware } from "../middlewares/auth.middleware.js";
import { createFoodPost, getAllFoodPosts, getFoodPost } from "../controllers/food.post.controller.js";
import multer from "multer";

const upload = multer({
    storage : multer.memoryStorage()
})

const router = express.Router();

router.post("/", authFoodPartnerMiddleware, upload.array("file"), createFoodPost);
router.get("/all", getAllFoodPosts);
router.get("/:id", getFoodPost);

export default router;