
import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    foodReel : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodReel",
        required : true
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
})


likeSchema.index({ foodReel : 1, user : 1 }, { unique : true });

const Like = mongoose.model("Like", likeSchema); 
export default Like;