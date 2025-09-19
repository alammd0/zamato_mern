import express from "express";
import { createFoodReel, getAllFoodReels, getFoodReel } from "../controllers/food.rell.controller.js";
import { authFoodPartnerMiddleware } from "../middlewares/auth.middleware.js";
import multer from "multer";

const upload = multer({
    storage : multer.memoryStorage(),
    limits: { fileSize: 1024 * 1024 * 1024 } 
})

const router =  express.Router();

router.post("/", authFoodPartnerMiddleware, upload.single("video"), createFoodReel);
router.get("/all", getAllFoodReels);
router.get("/:id", getFoodReel);

export default router;