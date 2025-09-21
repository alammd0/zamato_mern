import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import ChooseRegister from "../page/auth/ChooseRegister";
import UserSignup from "../page/auth/user/UserSignup";
import UserLogin from "../page/auth/user/UserLogin";
import FoodPartnerSignup from "../page/auth/foodPartner/FoodPartnerSignup";
import FoodPartnerLogin from "../page/auth/foodPartner/FoodPartnerLogin";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<ChooseRegister />} />
            <Route path="/user/register" element={<UserSignup />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/food-partner/register" element={<FoodPartnerSignup />} />
            <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        </Routes>
    )
}