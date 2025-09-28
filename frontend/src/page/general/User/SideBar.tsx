import { Button } from "@radix-ui/themes";
import { Film, Image, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setLogoutUser } from "../../../redux/slice/userAuthSlice";

export default function SideBar({activeTab, setActiveTab} : {activeTab : string, setActiveTab : React.Dispatch<React.SetStateAction<string>>}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const  clickLogout = () => {
        dispatch(setLogoutUser())
        navigate("/user/login");
        toast.success("You have been logged out successfully");
    }

    return (
        <div className="h-screen flex">
            <div className="w-64 bg-card border-r border-border p-4 flex flex-col">

               <h1 className="text-2xl font-bold text-primary mb-6">FoodReel</h1>

               <div className="flex flex-col gap-8">
                    <div>
                        <Button variant="ghost"
                        onClick={() => setActiveTab("reels")}
                         className={`custom-btn ${activeTab === "reels" ? "active-btn" : ""}`}>
                            <Film className="h-5 w-5" />
                            Reels
                        </Button>
                    </div>

                    <div>
                        <Button variant="ghost"
                        onClick={() => setActiveTab("posts")}
                        //  style={{ cursor: "pointer", width: "100%", display: "flex", justifyContent: "flex-start", gap: "8px" }}
                        className={`custom-btn ${activeTab === "posts" ? "active-btn" : ""}`}>
                            <Image className="h-5 w-5" />
                            Posts
                        </Button>
                    </div>

                    <div>
                        <Button variant="ghost"
                        onClick={() => setActiveTab("profile")}
                        //  style={{ cursor: "pointer", width: "100%", display: "flex", justifyContent: "flex-start", gap: "8px" }}
                        className={`custom-btn ${activeTab === "profile" ? "active-btn" : ""}`}>
                            <User />
                            Profile
                        </Button>
                    </div>
               </div>

               <div className="mt-auto">
                   <Button
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        color: "black",
                        backgroundColor: "oklch(0.95 0.01 85)",
                      }}

                      onClick={clickLogout}
                    variant="outline">
                       Logout
                   </Button>
               </div>
            </div>
        </div>
    )
}