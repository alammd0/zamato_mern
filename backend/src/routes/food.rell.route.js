import express from "express";
import { createFoodReel, getAllFoodReels, getFoodReel } from "../controllers/food.rell.controller.js";
import { authFoodPartnerMiddleware, authUserMiddleware } from "../middlewares/auth.middleware.js";
import multer from "multer";
import { likeFoodReel } from "../controllers/like.reel.controller.js";
import { commentFoodPost, getAllComments } from "../controllers/comment.post.controller.js";
import { saveFoodReel } from "../controllers/save.reel.controller.js";

const upload = multer({
    storage : multer.memoryStorage()
})

const router =  express.Router();

router.post("/", authFoodPartnerMiddleware, upload.single("video"), createFoodReel);
router.get("/all", getAllFoodReels);
router.get("/:id", getFoodReel);

router.post("/like", authUserMiddleware, likeFoodReel);
router.post("/comment", authUserMiddleware, commentFoodPost);
router.get("/comments", authUserMiddleware, getAllComments);
router.post("/save", authUserMiddleware, saveFoodReel);

export default router;