import mongoose from "mongoose";

const FoodPartnerSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
    }

})


const FoodPartner = mongoose.model("FoodPartner", FoodPartnerSchema);
export default FoodPartner;