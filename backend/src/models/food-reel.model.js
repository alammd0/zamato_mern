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

    // likes : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "Like"
    // },

    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Like"
        }
    ],

    // comments : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "Comment"
    // },

    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Comment"
        }
    ],

    // saves : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "Save"
    // },

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