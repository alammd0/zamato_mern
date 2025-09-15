import mongoose from "mongoose";

const FoodReelSchema = new mongoose.Schema({
    nameOfFood : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    videoUrl : {
        type : String,  
        required : true
    },

    likes : {
        type : mongoose.Schema.Types.ObjectId,
        
    },

    comments : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    },

    saves : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Save"
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
})

const FoodReel = mongoose.model("FoodReel", FoodReelSchema);
export default FoodReel;