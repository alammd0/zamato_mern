
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import ChooseRegister from "../page/auth/ChooseRegister";
import UserSignup from "../page/auth/user/UserSignup";
import UserLogin from "../page/auth/user/UserLogin";
import FoodPartnerSignup from "../page/auth/foodPartner/FoodPartnerSignup";
import FoodPartnerLogin from "../page/auth/foodPartner/FoodPartnerLogin";
import FoodPartnerLandingPage from "../page/general/dashboard/FoodPartner";
import UserLandingPage from "../page/general/User/User";
import CreateReel from "../page/general/dashboard/CreateReel";
import CreatePost from "../page/general/dashboard/CreatePost";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<ChooseRegister />} />
            <Route path="/user/register" element={<UserSignup />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/food-partner/register" element={<FoodPartnerSignup />} />
            <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
            <Route path="/food-partner/dashboard" element={<FoodPartnerLandingPage/>} />
            <Route path="/user/dashboard" element={<UserLandingPage/>} />
            <Route path="/food-reel" element={<CreateReel />} />
            <Route path="/food-post" element={<CreatePost />} />
        </Routes>
    )
}