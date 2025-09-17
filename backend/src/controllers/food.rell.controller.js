import FoodReel from "../models/food-rells.model.js";
import User from "../models/auth.model.js";

export const createFoodReel = async (req, res) => {
    try{

    }
    catch(err){
        console.err(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const getAllFoodReels = async (req, res) => {
    try{

    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const getFoodReel = async (req, res) => {
    try{

    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}