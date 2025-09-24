import { useState } from "react";
import type { FoodReel } from "../../../types";
import { createFoodReel } from "../../../service/api/reel/Reel";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateReel() {
    const [reel, setReel] = useState<FoodReel>({
        nameOfFood: "",
        description: "",
        tags: [],
        video: null,
    });

    const [videoPreview, setVideoPreview] = useState<string | null>(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReel((prevReel) => ({
            ...prevReel,
            [name]: value,
        }));
    };

    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setReel((prevReel) => ({
            ...prevReel,
            tags: value.split(",").map((tag) => tag.trim()),
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setReel((prevReel) => ({
                ...prevReel,
                video: file,
            }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setVideoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveVideo = () => {
        setReel((prevReel) => ({
            ...prevReel,
            video: null,
        }));
        setVideoPreview(null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!reel.video) {
            toast.error("Please upload a video.");
            return;
        }
        setIsLoading(true);
        try {
            await createFoodReel(
                reel.nameOfFood,
                reel.description,
                reel.tags,
                reel.video
            );
            toast.success("Reel created successfully!");
            navigate("/food-partner/dashboard");
        } catch (error) {
            toast.error("Failed to create reel. Please try again.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background">
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md max-w-2xl w-full">
                <header className="text-center mb-2">
                    <h1 className="text-3xl font-bold text-primary">
                        Create a New Food Reel
                    </h1>
                </header>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="nameOfFood"
                            className="text-sm font-medium text-muted-foreground"
                        >
                            Name of Food
                        </label>
                        <input
                            type="text"
                            id="nameOfFood"
                            name="nameOfFood"
                            value={reel.nameOfFood}
                            onChange={handleChange}
                            className="bg-input border outline-none border-border rounded-md p-2 text-foreground focus:ring-1 focus:ring-ring"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="description"
                            className="text-sm font-medium text-muted-foreground"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={reel.description}
                            onChange={handleChange}
                            className="bg-input border border-border rounded-md p-2 text-foreground outline-none focus:ring-1 focus:ring-ring"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="tags"
                            className="text-sm font-medium text-muted-foreground"
                        >
                            Tags (comma-separated)
                        </label>
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            value={reel.tags.join(", ")}
                            onChange={handleTagChange}
                            className="bg-input border border-border rounded-md p-2 text-foreground outline-none focus:ring-1 focus:ring-ring"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="video"
                            className="text-sm font-medium text-muted-foreground"
                        >
                            Video
                        </label>
                        <input
                            type="file"
                            id="video"
                            name="video"
                            accept="video/*"
                            onChange={handleFileChange}
                            className="bg-input border border-border rounded-md p-2 text-foreground focus:ring-1 focus:ring-ring"
                        />
                        <div className="flex flex-wrap gap-4 mt-4">
                            {videoPreview && (
                                <div className="relative">
                                    <video
                                        src={videoPreview}
                                        controls
                                        className="w-full h-auto max-h-64 object-cover rounded-md border-2 border-border"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleRemoveVideo}
                                        className="absolute top-0 right-0 bg-destructive text-destructive-foreground rounded-full p-1 text-xs leading-none"
                                    >
                                        &times;
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground rounded-md py-2 px-4 font-semibold hover:bg-primary/90"
                    >
                        Create Reel
                    </button>
                </form>
            </div>
        </div>
    );
}