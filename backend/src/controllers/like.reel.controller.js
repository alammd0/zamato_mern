import FoodReel from "../models/food-reel.model.js";
import Like from "../models/like.model.js";

export const likeFoodReel = async (req, res) => {
    try{
        const { foodReelId } = req.body;

        const userId = req.userId;

        console.log(userId);

        if(!foodReelId){
            return res.status(400).json({
                message : "Please provide food post id"
            })
        }

        const alreadyLiked = await Like.findOne({
            foodReel : foodReelId,
        })

        console.log(alreadyLiked);

        if(alreadyLiked){
            await Like.deleteOne({
                _id : alreadyLiked._id,
                user : userId
            });

            await FoodReel.findByIdAndUpdate(foodReelId, {
                $inc : {
                    likeCount : -1
                }
            });

            return res.status(200).json({
                message : "Food reel unliked successfully"
            })
        };

        const newLike = await Like.create({
            foodReel : foodReelId,
            user : userId
        });

        await FoodReel.findByIdAndUpdate(foodReelId, {
            $inc : {
                likeCount : 1
            }
        });

        return res.status(200).json({
            message : "Food reel liked successfully",
            like : {
                _id : newLike._id,
                foodReel : newLike.foodReel
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