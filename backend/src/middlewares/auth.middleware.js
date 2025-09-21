import jwt from "jsonwebtoken";
import User from "../models/auth.model.js";
import FoodPartner from "../models/food.partner.model.js";

export const authUserMiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "Please login first"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // check if user exists
        const user = await User.findById(decoded.userId);

        if(!user){
            return res.status(401).json({
                message : "User does not exist"
            })
        }

        // console.log(user);

        req.userId = user._id;
        console.log(req.userId);

        next();
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const authFoodPartnerMiddleware = async (req, res, next) => {

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "Please login first"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // check if food partner exists
        const foodPartner = await FoodPartner.findById(decoded.userId);
        // console.log(foodPartner);

        if(!foodPartner){
            return res.status(401).json({
                message : "Food partner does not exist"
            })
        }

        req.foodPartnerId = decoded.userId;

        next();
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}