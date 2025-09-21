import { APIConnector } from "../../APIConnector";

export const likeFoodPost = async ( foodPostId : string) => {
    try{
        const response = await APIConnector("POST", `/food-post/like`, {
            foodPostId
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

export const commentFoodPost = async (foodPostId : string, comment : string) => {
    try {
        const response = await APIConnector("POST", `/food-post/comment`, {
            foodPostId,
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

export const getAllComments = async (foodPostId : string) => {
    try{
        const response = await APIConnector("GET", `/food-post/comments`, {
            foodPostId
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

export const saveFoodPost = async (foodPostId : string) => {
    try{
        const response = await APIConnector("POST", `/food-post/save`, {
            foodPostId
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