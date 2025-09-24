import { APIConnector } from "../../APIConnector";

export const createFoodReel = async (nameOfFood : string, description : string, tags : string[], video : File) => {
    try{
        const formData = new FormData();
        formData.append("nameOfFood", nameOfFood);
        formData.append("description", description);
        tags.forEach(tag => formData.append("tags[]", tag));
        formData.append("video", video);

        const response = await APIConnector("POST", "/food-reel", formData);

        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export const getAllFoodReels = async () => {
    try{
        const response = await APIConnector("GET", "/food-reel/all", null);
        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export const getFoodReel = async (id : string) => {
    try{
        const response = await APIConnector("GET", `/food-reel/${id}`, null);
        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}