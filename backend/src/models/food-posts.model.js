
import mongoose from "mongoose";

const FoodPostSchema = new mongoose.Schema({
    nameOfFood : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    imageUrl : {
        type : String,
        required : true
    },

    tags : {
        type : [String],
        required : true
    },

    postLikes : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "PostLike"
    },

    comments : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "PostComment"
    },
    
    saves : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "PostSave"
    },

    foodPartner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodPartner"
    },
    
    createdAt : {
        type : Date,
        default : Date.now
    }
}, {
    timestamps : true
});

const FoodPost = mongoose.model("FoodPost", FoodPostSchema);
export default FoodPost;