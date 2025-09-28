import { useEffect, useState } from "react";
import type { FoodPosts, FoodReels } from "../../../types";
import SideBar from "./SideBar";
import ReelsCard from "./ReelsCard";
import PostsCard from "./PostsCard";
import ProfileCard from "./ProfileCard";
import { getAllFoodPosts } from "../../../service/api/post/Post";
import toast from "react-hot-toast";
import { getAllFoodReels } from "../../../service/api/reel/Reel";
import FooterSection from "../../../components/core/FooterSection";

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

        getFoodPosts();
    }, [activeTab])

    useEffect( () => {
        const getFoodReels = async () => {
            try{
                const response = await getAllFoodReels();
                if(response.message !== "Food reels retrieved successfully"){
                    toast.error(response.message);
                    return;
                }
                setReelData(response.foodReel);
            }
            catch(err){
                console.error(err);
            }
        }
        getFoodReels();
    }, [activeTab]);
    
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
                            <FooterSection />
                        </>
                    )
                }
                
                {
                    activeTab === "posts" && (
                        <>
                            <PostsCard postData={postData} />
                            <FooterSection />
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