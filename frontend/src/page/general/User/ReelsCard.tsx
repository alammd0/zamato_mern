import { Heart, MessageCircle, Bookmark } from 'lucide-react';
import type { FoodReels } from "../../../types";
import { likeFoodReel } from '../../../service/api/reel/ReelPost';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';

export default function ReelsCard({reelData} : {reelData : FoodReels[]}) {
    const [reels, setReels] = useState<FoodReels[]>([]);
    const [likedReels, setLikedReels] = useState(new Set<string>());

    useEffect(() => {
        if (reelData) {
            setReels(reelData);
        }
    }, [reelData]);

    const handleLikeToggle = async (reelId: string) => {
        const isLiked = likedReels.has(reelId);
        setLikedReels(prev => {
            const newSet = new Set(prev);
            if (isLiked) newSet.delete(reelId);
            else newSet.add(reelId);
            return newSet;
        });
        setReels(prevReels => prevReels.map(r =>
            r._id === reelId
                ? { ...r, likeCount: isLiked ? r.likeCount - 1 : r.likeCount + 1 }
                : r
        ));

        try {
            await likeFoodReel(reelId);
            // console.log(response);
            toast.success(isLiked ? 'Unliked!' : 'Liked!');
        } catch (error) {
            setLikedReels(prev => {
                const newSet = new Set(prev);
                if (isLiked) newSet.add(reelId);
                else newSet.delete(reelId);
                return newSet;
            });
            setReels(prevReels => prevReels.map(r =>
                r._id === reelId
                    ? { ...r, likeCount: isLiked ? r.likeCount + 1 : r.likeCount - 1 }
                    : r
            ));
            toast.error("Failed to update like status.");
            console.error(error);
        }
    };

    function handleClickComment(reelId: string) {
        setReels(prevReels =>
            prevReels.map(reel =>
                reel._id === reelId ? { ...reel, comments: reel.comments + 1 } : reel
            )
        );
        toast.success("Comment added!");
    }

    return (
        <div className="flex-1 flex justify-center p-4 bg-card-foreground/10">
            <div className="h-full w-full max-w-sm snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
                {reels.length > 0 ? (
                    reels.map((reel) => (
                        <div key={reel._id} className="snap-center shrink-0 h-full w-full flex items-center justify-center">
                            <div className="w-full h-[95%] bg-white dark:bg-black rounded-xl shadow-lg flex flex-col relative overflow-hidden">
                                <video
                                    src={reel.videoUrl}
                                    className="h-full w-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                ></video>

                                <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/60 to-transparent w-full">
                                    <h3 className="font-bold text-lg">{reel.nameOfFood}</h3>
                                    <p className="text-sm">{reel.description}</p>
                                    <div className="flex gap-2 mt-1">
                                        {reel.tags.map(tag => `#${tag}`).join(' ')}
                                    </div>
                                </div>

                                <div className="absolute top-[60%] right-2 -translate-y-1/2 flex flex-col gap-4">
                                    <button onClick={() => handleLikeToggle(reel._id)} className="text-white flex flex-col items-center text-xs">
                                        <Heart size={28} fill={likedReels.has(reel._id) ? 'red' : 'none'} />
                                        <span className="text-xs">{reel.likeCount}</span>
                                    </button>
                                    <button onClick={() => handleClickComment(reel._id)} className="text-white flex flex-col items-center">
                                        <MessageCircle size={28} />
                                        <span className="text-xs">{reel.comments}</span>
                                    </button>
                                    <button className="text-white flex flex-col items-center">
                                        <Bookmark size={28} />
                                        <span className="text-xs">{reel.save}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 dark:text-gray-400 flex items-center justify-center h-full">
                        <p>No reels to display at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
