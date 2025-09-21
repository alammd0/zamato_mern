import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import ChooseRegister from "../page/auth/ChooseRegister";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<ChooseRegister />} />
        </Routes>
    )
}