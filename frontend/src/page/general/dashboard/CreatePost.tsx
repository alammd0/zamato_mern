import { useState } from "react"
import type { FoodPost } from "../../../types"
import { createFoodPost } from "../../../service/api/post/Post";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {

    const [post, setPost] = useState<FoodPost>({
        nameOfFood : "",
        description : "",
        tags : [],
        images : []
    })
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if(files){
            const newFiles = Array.from(files);
            setPost( (prev) => ({
                ...prev,
                images: [...prev.images, ...newFiles]
            }));

            const newPreviews = newFiles.map(file => URL.createObjectURL(file));
            setImagePreviews(prev => [...prev, ...newPreviews]);
        }
    }

    const handleRemoveImage = (index: number) => {
        setPost(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const handleTagChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const tags = e.target.value.split(",").map(t => t.trim());
        setPost( (prev) => ({
            ...prev,
            tags
        }));
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPost( (prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }));
    }

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nameOfFood", post.nameOfFood);
        formData.append("description", post.description);
        post.tags.forEach(tag => formData.append("tags[]", tag));
        post.images.forEach(file => formData.append("images", file));

        try{
            setIsLoading(true);
            const response = await createFoodPost(formData);

            if(response.message !== "Food post created successfully"){
                toast.error(response.message);
                setIsLoading(false);
                return;
            }

            toast.success(response.message);
            navigate("/food-partner/dashboard");
            setIsLoading(false);
        }
        catch(err){
            console.error(err);
            toast.error("Failed to create post");
            setIsLoading(false);
        }
    }

    if(isLoading){
        return <div className="flex items-center justify-center min-h-screen bg-background">
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
                </div>
        </div>
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md max-w-2xl w-full">
                <header className="text-center mb-2">
                    <h1 className="text-3xl font-bold text-primary">Create a New Food Post</h1>
                </header>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nameOfFood" className="text-sm font-medium text-muted-foreground">Name of Food</label>
                        <input type="text" id="nameOfFood" name="nameOfFood" value={post.nameOfFood} onChange={handleChange} className="bg-input border outline-none border-border rounded-md p-2 text-foreground focus:ring-1 focus:ring-ring" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="description" className="text-sm font-medium text-muted-foreground">Description</label>
                        <textarea id="description" name="description" value={post.description} onChange={handleChange} className="bg-input border border-border rounded-md p-2 text-foreground outline-none focus:ring-1 focus:ring-ring" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="tags" className="text-sm font-medium text-muted-foreground">Tags (comma-separated)</label>
                        <input type="text" id="tags" name="tags" value={post.tags.join(", ")} onChange={handleTagChange} className="bg-input border border-border rounded-md p-2 text-foreground outline-none focus:ring-1 focus:ring-ring" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="images" className="text-sm font-medium text-muted-foreground">Images</label>
                        <input type="file" id="images" name="images" multiple onChange={handleFileChange} className="bg-input border border-border rounded-md p-2 text-foreground focus:ring-1 focus:ring-ring" />
                        <div className="flex flex-wrap gap-4 mt-4">
                            {imagePreviews.map((src, index) => (
                                <div key={index} className="relative">
                                    <img src={src} alt={`Preview ${index + 1}`} className="w-24 h-24 object-cover rounded-md border-2 border-border" />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 bg-destructive text-destructive-foreground rounded-full p-1 text-xs leading-none"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="bg-primary text-primary-foreground rounded-md py-2 px-4 font-semibold hover:bg-primary/90">Create Post</button>
                </form>
            </div>
        </div>
    )
}