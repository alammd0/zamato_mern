import express from "express";
import { createFoodReel, getAllFoodReels, getFoodReel } from "../controllers/food.rell.controller.js";
import { authFoodPartnerMiddleware } from "../middlewares/auth.middleware.js";
import multer from "multer";

const upload = multer({
    storage : multer.memoryStorage()
})

const router =  express.Router();

router.post("/", authFoodPartnerMiddleware, upload.single("file"), createFoodReel);
router.get("/all", authFoodPartnerMiddleware, getAllFoodReels);
router.get("/:id", authFoodPartnerMiddleware, getFoodReel);

export default router;