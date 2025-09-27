import { useEffect, useState } from "react";
import type { FoodPosts, FoodReels } from "../../../types";
import SideBar from "./SideBar";
import ReelsCard from "./ReelsCard";
import PostsCard from "./PostsCard";
import ProfileCard from "./ProfileCard";
import { getAllFoodPosts } from "../../../service/api/post/Post";
import toast from "react-hot-toast";

export default function UserLandingPage() {

    const [activeTab, setActiveTab] = useState("reels");
    const [postData, setPostData] = useState<FoodPosts[]>([]);
    const [reelData, setReelData] = useState<FoodReels[]>([]);

    useEffect( () => {
        const getFoodPosts = async () => {
            try{
                const response = await getAllFoodPosts();
                if(response.message !== "Food posts retrieved successfully"){
                    toast.error(response.message);
                    return;
                }
                setPostData(response.foodPost);
            }
            catch(err){
                console.error(err);
            }
        }
    }, [activeTab])
    // const [profileData, setProfileData] = useState<>({});


    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="flex h-screen">
                <SideBar 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                {
                    activeTab === "reels" && (
                        <>
                            <ReelsCard reelData={reelData} />
                        </>
                    )
                }
                
                {
                    activeTab === "posts" && (
                        <>
                            <PostsCard postData={postData} />
                        </>
                    )
                }

                {
                    activeTab === "profile" && (
                        <>
                            <ProfileCard />
                        </>
                    )
                }
            </div>
        </div>
    )
}