import FoodReel from "../models/reel.food.model.js";
import Save from "../models/reel.save.model.js";

export const saveFoodReel = async (req, res) => {
    try{
        const { foodReelId } = req.body;
        const userId = req.userId;

        if(!foodReelId){
            return res.status(400).json({
                message : "Please provide food reel id"
            })
        }

        const alreadySaved = await Save.findOne({
            foodReel : foodReelId,
        })

        console.log(alreadySaved);

        if(alreadySaved){
            await Save.deleteOne({
                _id : alreadySaved._id,
                user : userId
            });

            await FoodReel.findByIdAndUpdate(foodReelId, {
                $inc : {
                    saveCount : -1
                }
            });

            return res.status(200).json({
                message : "Food reel unsaved successfully"
            })
        };

        const newSave = await Save.create({
            foodReel : foodReelId,
            user : userId
        });

        await FoodReel.findByIdAndUpdate(foodReelId, {
            $inc : {
                saveCount : 1
            }
        });

        return res.status(200).json({
            message : "Food reel saved successfully",
            save : {
                _id : newSave._id,
                foodReel : newSave.foodReel
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