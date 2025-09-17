
import express from "express";
import { loginFoodPartner, loginUser, logoutFoodPartner, logoutUser, registerFoodPartner, registerUser, resetPassword, sendResetPasswordEmail } from "../controllers/auth.controller.js"

const router = express.Router();

// for user
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/logout", logoutUser)

router.post("/user/send-reset-password-email", sendResetPasswordEmail);
router.put("/user/reset-password", resetPassword);

// for food partner
router.post("/foodpartner/register", registerFoodPartner);
router.post("/foodpartner/login", loginFoodPartner);
router.get("/foodpartner/logout", logoutFoodPartner)

router.post("/foodpartner/send-reset-password-email", sendResetPasswordEmail);
router.put("/foodpartner/reset-password", resetPassword);

export default router;