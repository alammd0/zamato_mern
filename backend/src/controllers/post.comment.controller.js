import FoodPost from "../models/posts.food.model.js";
import PostComment from "../models/post.comment.model.js";

export const commentFoodPost = async (req, res) => {
    try{
        const { foodPostId, text } = req.body;
        const userId = req.userId;

        if(!foodPostId){
            return res.status(400).json({
                message : "Please provide food post id"
            })
        }

        if(!text){
            return res.status(400).json({
                message : "Please provide text"
            })
        }

        // create comment 
        const newComment = await PostComment.create({
            text,
            user : userId,
            post : foodPostId
        });

        await FoodPost.findByIdAndUpdate(foodPostId, {
            $inc : {
                commentCount : 1
            }
        });

        return res.status(201).json({
            message : "Comment created successfully",
            comment : newComment
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const getAllComments = async (req, res) => {
    try{
        const { foodPostId } = req.body;

        if(!foodPostId){
            return res.status(400).json({
                message : "Please provide food post id"
            })
        }

        const comments = await PostComment.find({
            post : foodPostId
        })

        if(!comments){
            return res.status(404).json({
                message : "Comments does not exist"
            })
        }

        return res.status(200).json({
            message : "Comments retrieved successfully",
            comments
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}