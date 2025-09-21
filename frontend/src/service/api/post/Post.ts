import type { CreateFoodPost } from "../../../types";
import { APIConnector } from "../../APIConnector";


export const createFoodPost = async ({nameOfFood, description, tags, image} : CreateFoodPost) => {
    try{
        const formData = new FormData();
        formData.append("nameOfFood", nameOfFood);
        formData.append("description", description);
        formData.append("tags", tags.join(","));
        formData.append("image", image);

        const response = await APIConnector("POST", "/food-post", formData, 
        {
            "Content-Type" : "multipart/form-data"
        });

        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export const getAllFoodPosts = async () => {
    try{
        const response = await APIConnector("GET", "/food-post/all", null, 
        {
            "Content-Type" : "application/json"
        });
        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export const getFoodPost = async (id : string) => {
    try{
        const response = await APIConnector("GET", `/food-post/${id}`, null, 
        {
            "Content-Type" : "application/json"
        });
        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}