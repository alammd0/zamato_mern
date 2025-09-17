import FoodPost from "../models/food-posts.model.js";
import User from "../models/auth.model.js";
import { fileUpload } from "../config/file.upload.cloudinary.js";


export const createFoodPost = async (req, res) => {
    try{

        const { nameOfFood, description, tags } = req.body;

        if(!nameOfFood){
            return res.status(400).json({
                message : "Please provide name of food"
            })
        }

        const file = req.file;

        if(!file){
            return res.status(400).json({
                message : "Please provide image"
            })
        }

        const imageUrl = await fileUpload(file);

        const foodPost = await FoodPost.create({
            nameOfFood,
            description,
            imageUrl : imageUrl,
            tags : tags,
            foodPartner : req.foodPartnerId
        })

        return res.status(201).json({
            message : "Food post created successfully",
            foodPost
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const getAllFoodPosts = async (req, res) => {
    try{
        // get all food posts of food partner including food partner details
        const foodPost = await FoodPost.find({ foodPartner : req.foodPartnerId }).populate("foodPartner", "ownerName email contactNumber restaurantName address typeofRestaurant"); ;

        return res.status(200).json({
            message : "Food posts retrieved successfully",
            foodPost
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const getFoodPost = async (req, res) => {
    try{
        // get food post by id
        const id = req.params.id;

        const foodPost =  await FoodPost.findById(id).populate("foodPartner", "ownerName email contactNumber restaurantName address typeofRestaurant");

        if(!foodPost){
            return res.status(404).json({
                message : "Food post does not exist"
            })
        }

        return res.status(200).json({
            message : "Food post retrieved successfully",
            foodPost
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}