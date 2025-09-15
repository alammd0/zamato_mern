
import express from "express";
import { loginFoodPartner, loginUser, logoutFoodPartner, logoutUser, registerFoodPartner, registerUser, sendResetPasswordEmail } from "../controllers/auth.controller.js"

const router = express.Router();

// for user
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/logout", logoutUser)

router.post("/user/send-reset-passwordEmail", sendResetPasswordEmail);
router.post("/user/reset-password", resetPassword);

// for food partner
router.post("/foodpartner/register", registerFoodPartner);
router.post("/foodpartner/login", loginFoodPartner);
router.get("/foodpartner/logout", logoutFoodPartner)

router.post("/foodpartner/send-reset-passwordEmail", sendResetPasswordEmail);
router.post("/foodpartner/reset-password", resetPassword);

export default router;