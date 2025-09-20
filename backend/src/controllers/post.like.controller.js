import FoodPost from "../models/posts.food.model.js";
import PostLike from "../models/post.like.model.js";

export const likeFoodPost = async (req, res) => {
    try{
        const { foodPostId } = req.body;

        const userId = req.userId;

        // check if already liked
        const alreadyLiked = await PostLike.findOne({
            post : foodPostId,
            user : userId
        });

        if(alreadyLiked){
            await PostLike.deleteOne({
                _id : alreadyLiked._id,
                user : userId
            });

            await FoodPost.findByIdAndUpdate(foodPostId, {
                $inc : {
                    likeCount : -1
                }
            });

            return res.status(200).json({
                message : "Food post unliked successfully"
            })
        };

        const newLike = await PostLike.create({
            post : foodPostId,
            user : userId
        });

        await FoodPost.findByIdAndUpdate(foodPostId, {
            $inc : {
                likeCount : 1
            }
        });

        return res.status(200).json({
            message : "Food post liked successfully",
            like : {
                _id : newLike._id,
                post : newLike.post
            }
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}