import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { FoodPost } from "../../../types";
import { X } from "lucide-react";

export default function CreatePost() {
    
    const { register, handleSubmit, reset, setValue } = useForm<FoodPost>();
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");

    const [files, setFiles] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const syncFormFiles = (newFiles: File[]) => {
        setValue("image", newFiles);
    };


    const onSubmit: SubmitHandler<FoodPost> = async (data) => {
        const formData = new FormData();
        formData.append("nameOfFood", data.nameOfFood || "");
        formData.append("description", data.description || "");
        tags.forEach((t) => formData.append("tags[]", t));
        files.forEach((file) => formData.append("images", file));
        
        // console.log({ nameOfFood: data.nameOfFood, description: data.description, tags, files });

        // const response = await createFoodPost(formData);

        reset();
        setTags([]);
        previewImages.forEach((url) => URL.revokeObjectURL(url));
        setPreviewImages([]);
        setFiles([]);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleAddTag = () => {
        if (tagInput.trim() !== "") {
        setTags((prev) => [...prev, tagInput.trim()]);
        setTagInput("");
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const newFiles = Array.from(e.target.files);
        const newUrls = newFiles.map((f) => URL.createObjectURL(f));

        setFiles((prev) => {
            const merged = [...prev, ...newFiles];
            syncFormFiles(merged);
            return merged;
        });

        setPreviewImages((prev) => {
            const merged = [...prev, ...newUrls];
            return merged;
        });

        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleRemoveImage = (index: number) => {
        setFiles((prevFiles) => {
            const newFiles = prevFiles.filter((_, i) => i !== index);
            syncFormFiles(newFiles);
            return newFiles;
        });

        setPreviewImages((prev) => {
            const removed = prev[index];
            if (removed) URL.revokeObjectURL(removed);
            return prev.filter((_, i) => i !== index);
        });
    };

    useEffect(() => {
        return () => {
            previewImages.forEach((url) => URL.revokeObjectURL(url));
        };
    }, []);

  return (
    <div className="flex items-center justify-center px-6 py-10 min-h-screen bg-card border border-border rounded-lg shadow shadow-accent">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg border-border">

            <h2 className="text-2xl font-bold mb-4 text-center">Create Food Post</h2>

            <input
                {...register("nameOfFood", { required: true })}
                type="text"
                placeholder="Name of Food"
                className="w-full border p-2 rounded mb-3"
            />

            <textarea
                {...register("description")}
                placeholder="Description"
                className="w-full border p-2 rounded mb-3"
            />

            <input
                {...register("image" as any)}
                ref={(e) => {
                    register("image").ref(e);
                    fileInputRef.current = e;
                }}
                type="file"
                multiple
                onChange={handleImageChange}
                accept="image/*"
                className="mb-3"
            />

            {previewImages.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
                {previewImages.map((url, idx) => (
                    <div key={idx} className="relative">
                        <img src={url} alt={`preview-${idx}`} className="w-20 h-20 object-cover rounded" />
                            <button
                            type="button"
                            onClick={() => handleRemoveImage(idx)}
                            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center"
                            aria-label={`Remove image ${idx + 1}`}
                            >
                                <X />
                            </button>
                    </div>
                ))}
            </div>
            )}

            <div className="flex items-center gap-2 mb-3">
                <input
                    type="text"
                    placeholder="Add a tag"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    className="flex-1 border p-2 rounded"
                />
                <button type="button" onClick={handleAddTag} className="bg-blue-500 text-white px-3 py-1 rounded">
                    Add
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-200 px-2 py-1 rounded text-sm">
                    {tag}
                    </span>
                ))}
            </div>

            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
                Create Post
            </button>
        </form>
    </div>
  );
}
