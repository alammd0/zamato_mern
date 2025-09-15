
import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    foodReel : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodReel"
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
})

const Like = mongoose.model("Like", likeSchema); 
export default Like;