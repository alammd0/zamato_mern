import type { FoodPosts } from "../../../types";
import { Heart, MessageCircle, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function PostsCard({ postData }: { postData: FoodPosts[] }) {

    const [currentImageIndexes, setCurrentImageIndexes] = useState<number[]>(
        () => postData.map(() => 0)
    );

    useEffect(() => {
        setCurrentImageIndexes(postData.map(() => 0));
    }, [postData]);

    const handleNextImage = (postIndex: number, imagesLength: number) => {
        if (imagesLength === 0) return;
        setCurrentImageIndexes(prev => {
        const newIndexes = [...prev];
        newIndexes[postIndex] = (newIndexes[postIndex] + 1) % imagesLength;
        return newIndexes;
        });
    };

    const handlePrevImage = (postIndex: number, imagesLength: number) => {
        if (imagesLength === 0) return;
        setCurrentImageIndexes(prev => {
        const newIndexes = [...prev];
        newIndexes[postIndex] = (newIndexes[postIndex] - 1 + imagesLength) % imagesLength;
        return newIndexes;
        });
    };

    

    return (
        <div className="flex-1 flex justify-center p-4 bg-card-foreground/10">
            <div className="h-full w-full max-w-sm snap-mandatory overflow-y-scroll scrollbar-hide space-y-10">
                {postData.map((post, postIndex) => {
                    const images = post.imageUrl ?? [];
                    const currentIndex = currentImageIndexes[postIndex] ?? 0;
                    console.log(post);

                    return (
                        <div key={postIndex} className="bg-white border rounded-lg shadow-md overflow-hidden">

                            {/* profile Section */}
                            <div className="flex justify-between items-center px-1 py-2 bg-card">
                                <div className="flex items-center gap-1">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${post.foodPartner.ownerName}&background=random&size=128`}
                                        alt={post.foodPartner.ownerName}
                                        className="rounded-full h-12 w-12 bg-card-foreground"
                                    />

                                    <div>
                                        <h1 className="text-lg font-semibold">{post.foodPartner.ownerName}</h1>
                                        <p className="text-sm text-gray-500 pl-1 -mt-1">{post.foodPartner.restaurantName}</p>
                                    </div>
                                </div>

                                
                                <Link to="#">
                                    <button 
                                     className="bg-card px-2 py-1 text-[14px] hover:cursor-pointer font-normal hover:bg-card-foreground/10 hover:text-black rounded-full"
                                     >View</button>
                                </Link>
                            </div>

                            <div className="relative">
                                <div className="overflow-hidden">
                                    {images.length > 0 ? (
                                        <div
                                            className="flex transition-transform duration-300 ease-in-out"
                                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                        >
                                            {images.map((url, imgIndex) => (
                                                    <img
                                                        key={imgIndex}
                                                        src={url}
                                                        alt={`${post.nameOfFood ?? "post"} ${imgIndex + 1}`}
                                                        className="h-[400px] w-[520px] object-cover flex-shrink-0"
                                                    />
                                            ))}
                                        </div>
                                    ) : (
                                    <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400">
                                        No image available
                                    </div>
                                    )}
                                </div>

                                {images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => handlePrevImage(postIndex, images.length)}
                                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={() => handleNextImage(postIndex, images.length)}
                                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1"
                                            aria-label="Next image"
                                        >
                                            <ChevronRight size={24} />
                                        </button>

                                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                            {images.map((_, dotIndex) => (
                                                <div
                                                    key={dotIndex}
                                                    className={`w-2 h-2 rounded-full ${currentIndex === dotIndex ? 'bg-white' : 'bg-gray-400'}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-4">
                                        <button aria-label="Like">
                                            <Heart size={24} />
                                        </button>
                                        <button aria-label="Comment">
                                            <MessageCircle size={24} />
                                        </button>
                                    </div>
                                    <button aria-label="Save">
                                        <Bookmark size={24} />
                                    </button>
                                </div>

                                <p className="text-gray-600">{post.likes ?? 0} likes</p>

                                <p className="flex flex-col mt-2">
                                    <span className="font-semibold capitalize text-lg">{post.nameOfFood}</span>
                                    <span className="text-gray-700 text-[16px] font-normal">{post.description}</span>
                                </p>

                                <div className="mt-2">
                                    {(post.tags ?? []).map((tag, i) => (
                                        <span key={i} className="text-blue-500 mr-2">#{tag}</span>
                                    ))}
                                </div>

                                <p className="text-gray-400 text-sm mt-2">
                                    View all {post.comments ?? 0} comments
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
