import mongoose from "mongoose";

const FoodReelSchema = new mongoose.Schema({
    nameOfFood : {
        type : String,
        required : true
    },

    description : {
        type : String
    },

    videoUrl : {
        type : String,  
        required : true
    },

    tags : {
        type : [String],
    },

    likeCount : {
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

    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Like"
        }
    ],

    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Comment"
        }
    ],

    saves : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Save"
        }
    ],

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
})

const FoodReel = mongoose.model("FoodReel", FoodReelSchema);
export default FoodReel;