import FoodPost from "../models/posts.food.model.js";
import PostSave from "../models/post.save.model.js";

export const saveFoodPost = async (req, res) => {
    try{
        const { foodPostId } = req.body;
        const userId = req.userId;

        if(!foodPostId){
            return res.status(400).json({
                message : "Please provide food post id"
            })
        }

        const alreadySaved = await PostSave.findOne({
            post: foodPostId,
            user: userId
        })

        if(alreadySaved){
            await PostSave.deleteOne({
                _id : alreadySaved._id,
                user : userId
            });

            await FoodPost.findByIdAndUpdate(foodPostId, {
                $inc : {
                    saveCount : -1
                }
            });

            return res.status(200).json({
                message : "Food post unsaved successfully"
            })
        };

        const newSave = await PostSave.create({
            post : foodPostId,
            user : userId
        });

        await FoodPost.findByIdAndUpdate(foodPostId, {
            $inc : {
                saveCount : 1
            }
        });

        return res.status(200).json({
            message : "Food post saved successfully",
            save : {
                _id : newSave._id,
                foodPost : newSave.foodPost
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