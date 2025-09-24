import axios from "axios";
import { APIConnector } from "../../APIConnector";


export const createFoodPost = async (postData : FormData) => {
    try{
        const response = await axios.post("http://localhost:3000/api/v1/food-post", postData,
            {
                headers : {
                    "Content-Type" : "multipart/form-data"
                },
                
                withCredentials : true
            }
        );
        return response.data;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export const getAllFoodPosts = async () => {
    try{
        const response = await APIConnector("GET", "/food-post/all", null);
        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export const getFoodPost = async (id : string) => {
    try{
        const response = await APIConnector("GET", `/food-post/${id}`, null);
        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}