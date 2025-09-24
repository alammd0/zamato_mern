import { APIConnector } from "../../APIConnector";

export const likeFoodPost = async ( foodPostId : string) => {
    try{
        const response = await APIConnector("POST", `/food-post/like`, {
            foodPostId
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
        });
        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}