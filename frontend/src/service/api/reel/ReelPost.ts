import { APIConnector } from "../../APIConnector";

export const likeFoodReel = async (foodReelId : string) => {
    try{
        const response = await APIConnector("POST", `/food-reel/like`, {
            foodReelId
        } , 
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

export const commentFoodReel = async (foodReelId : string, comment : string) => {
    try {
        const response = await APIConnector("POST", `/food-reel/comment`, {
            foodReelId,
            comment
        } , 
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

export const getAllComments = async (foodReelId : string) => {
    try{
        const response = await APIConnector("GET", `/food-reel/comments`, {
            foodReelId
        } , 
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

export const saveFoodReel = async (foodReelId : string) => {
    try{
        const response = await APIConnector("POST", `/food-reel/save`, {
            foodReelId
        } , 
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