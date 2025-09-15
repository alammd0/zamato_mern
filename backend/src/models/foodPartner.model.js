import mongoose from "mongoose";

const FoodPartnerSchema = new mongoose.Schema({
    ownerName:{
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    contactNumber : {
        type : Number,
    },

    restaurantName : {
        type : String,
        required : true
    },

    profileImage : {
        type : String,
    },

    address : {
        type : String,
        required : true
    },

    typeofRestaurant : {
        type : String,
        default : "Fast Food",
        enum : ["Fast Food", "Cafe", "Restaurant", "Bar", "Pub", "Deli", "Bakery", "Ice Cream", "Cafeteria", "Other"],
    },

    password : {
        type : String,
    },

    foodReels : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodReel"
    },

    foodPosts : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodPost"
    }
})


const FoodPartner = mongoose.model("FoodPartner", FoodPartnerSchema);
export default FoodPartner;