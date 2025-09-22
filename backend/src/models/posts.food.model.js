
import mongoose from "mongoose";

const FoodPostSchema = new mongoose.Schema({
    nameOfFood : {
        type : String,
        required : true
    },

    description : {
        type : String
    },

    imageUrl : [
        {
            type : String,
        }
    ],

    tags : [
        {
            type : String
        }
    ],

    lekeCount : {
        type : Number,
        default : 0
    },

    saveCount : {
        type : Number,
        default : 0
    },

    commentCount : {
        type : Number,
        default : 0
    },

    foodPartner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodPartner"
    },

    postLikes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "PostLike"
        }
    ],

    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "PostComment"
    }],

    saves : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "PostSave"
        }
    ],

    createdAt : {
        type : Date,
        default : Date.now
    }
}, {
    timestamps : true
});

const FoodPost = mongoose.model("FoodPost", FoodPostSchema);
export default FoodPost;