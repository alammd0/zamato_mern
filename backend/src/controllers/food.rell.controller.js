import FoodReel from "../models/food-reel.model.js";
import { fileUpload } from "../config/file.upload.imagekit.js";

export const createFoodReel = async (req, res) => {
    try{

        const { nameOfFood, description, tags } = req.body;

        if(!nameOfFood){
            return res.status(400).json({
                message : "Please provide name of food"
            })
        }

        // console.log(typeof tags);

        // const video = req.files?.video;
        const video = req.file;
        console.log(video);

        if(!video){
            return res.status(400).json({
                message : "Please provide video"
            })
        }

        const uploadVideo = await fileUpload(video);
        console.log(uploadVideo);
        // const uploadVideo = await uploadImageToCloudinary("zamato_mern", video);

        const foodReel = await FoodReel.create({
            nameOfFood,
            description,
            videoUrl : uploadVideo.url,
            tags : tags.map(t => t.toString()),
            foodPartner : req.foodPartnerId
        });

        return res.status(201).json({
            message : "Food reel created successfully",
            foodReel
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const getAllFoodReels = async (req, res) => {
    try{
        const foodReel = await FoodReel.find().populate("foodPartner", "ownerName email contactNumber restaurantName address typeofRestaurant");

        if(!foodReel){
            return res.status(404).json({
                message : "Food reels does not exist"
            })
        }

        return res.status(200).json({
            message : "Food reels retrieved successfully",
            foodReel
        })
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
        const id = req.params.id; 

        const foodReel = await FoodReel.findById(id).populate("foodPartner", "ownerName email contactNumber restaurantName address typeofRestaurant");

        if(!foodReel){
            return res.status(404).json({
                message : "Food reel does not exist"
            })
        }

        return res.status(200).json({
            message : "Food reel retrieved successfully",
            foodReel
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}