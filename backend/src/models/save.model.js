import mongoose from "mongoose";

const saveSchema = new mongoose.Schema({
    foodReel : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodReel"
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
})

const Save = mongoose.model("Save", saveSchema);
export default Save;