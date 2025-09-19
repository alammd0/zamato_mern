import mongoose from "mongoose";

const saveSchema = new mongoose.Schema({
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

const Save = mongoose.model("Save", saveSchema);
export default Save;