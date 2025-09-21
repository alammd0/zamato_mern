import { APIConnector } from "../../APIConnector";

export const createFoodReel = async (nameOfFood : string, description : string, tags : string[], image : File) => {
    try{
        const formData = new FormData();
        formData.append("nameOfFood", nameOfFood);
        formData.append("description", description);
        formData.append("tags", tags.join(","));
        formData.append("image", image);

        const response = await APIConnector("POST", "/food-reel", formData, 
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

export const getAllFoodReels = async () => {
    try{
        const response = await APIConnector("GET", "/food-reel/all", null, 
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

export const getFoodReel = async (id : string) => {
    try{
        const response = await APIConnector("GET", `/food-reel/${id}`, null, 
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