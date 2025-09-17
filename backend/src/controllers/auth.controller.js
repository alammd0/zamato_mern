
import User from "../models/auth.model.js"
import FoodPartner from "../models/foodPartner.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { resetMessage } from "../templates/reset.message.js";
import { sendEmail } from "../config/send.nodemailer.js";

// all for user register
export const registerUser = async (req, res) => {
    try{
        const { fullname, email, password } = req.body ; 

        if(!fullname || !email){
            return res.status(400).json({ message : "Please provide all the required fields" });
        }

        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({ message : "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            fullname,
            email,
            password : hashedPassword
        })

        const token = jwt.sign({ userId : user._id, email : user.email }, process.env.JWT_SECRET);

        // set token in cookie
        res.cookie("token", token, { httpOnly : true });

        return res.status(201).json({
            message : "User registered successfully",
            token : token,
            user : {
                _id : user._id,
                email : user.email,
                fullname : user.fullname
            }
        })

    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body ; 

        if(!email || !password){
            return res.status(400).json({
                message : "Please provide all the required fields"
            })
        };

        // check if user exists
        const userExits = await User.findOne({
            email
        });

        if(!userExits){
            return res.status(400).json({
                message : "User does not exist"
            })
        };

        // compare password
        const isPasswordCorrect = await bcrypt.compare(password, userExits.password);

        if(!isPasswordCorrect){
            return res.status(400).json({
                message : "Incorrect password and email"
            })
        }

        const token =  jwt.sign({ userId : userExits._id, email : userExits.email }, process.env.JWT_SECRET);

        // set token in cookie
        res.cookie("token", token, { httpOnly : true });

        return res.status(200).json({
            message : "User logged in successfully",
            token : token,
            user : {
                _id : userExits._id,
                email : userExits.email,
                fullname : userExits.fullname
            }
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const logoutUser = async (req, res) => {
    try{
        res.clearCookie("token");
        return res.status(200).json({
            message : "User logged out successfully"
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

// all for food partner register ( remainder test)
export const registerFoodPartner = async (req, res) => {
    try {
        // fetch data of food partner
        const { ownerName, email, contactNumber, restaurantName,address, typeofRestaurant, password } = req.body;

        if(!ownerName || !email || !restaurantName || !address || !typeofRestaurant){
            return res.status(400).json({
                message : "Please provide all the required fields"
            })
        }

        // check if food partner already exists
        const existingFoodPartner = await FoodPartner.findOne({ email });

        if(existingFoodPartner) {
            return res.status(400).json({
                message : "Food partner already exists",    
            })
        }

        // hased password 
        const hashedPassword = await bcrypt.hash(password, 10);

        // if food partner does not exist, create it
        const newFoodPartner = await FoodPartner.create({
            ownerName,
            email,
            contactNumber,
            restaurantName,
            address,
            typeofRestaurant,
            password : hashedPassword
        }); 

        // generate token 
        const token = jwt.sign({ userId : newFoodPartner._id, email : newFoodPartner.email }, process.env.JWT_SECRET);

        // set token in cookie
        res.cookie("token", token, { httpOnly : true });

        return res.status(201).json({
            message : "Food partner registered successfully",
            token,
            foodPartner : {
                _id : newFoodPartner._id,
                ownerName : newFoodPartner.ownerName,
                email : newFoodPartner.email,
                contactNumber : newFoodPartner.contactNumber,
                restaurantName : newFoodPartner.restaurantName,
                address : newFoodPartner.address,
                typeofRestaurant : newFoodPartner.typeofRestaurant
            }
        })
    }
    catch (err){
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

// all for food partner login
export const loginFoodPartner = async (req, res) => {
    try {
        const { email, password } = req.body ;
        if(!email || !password){
            return res.status(400).json({
                message : "Please provide all the required fields"
            })
        };

        // check if food partner exists
        const foodPartnerExits = await FoodPartner.findOne({
            email
        });

        if(!foodPartnerExits){
            return res.status(400).json({
                message : "Food partner does not exist"
            })
        };

        // // compare password
        // const isPasswordCorrect = await bcrypt.compare(password, foodPartnerExits.password);
        const isPasswordCorrect = await bcrypt.compare(password, foodPartnerExits.password);

        if(!isPasswordCorrect){
            return res.status(400).json({
                message : "Incorrect password and email"
            })
        }

        const token =  jwt.sign({ userId : foodPartnerExits._id, email : foodPartnerExits.email }, process.env.JWT_SECRET);

        // set token in cookie
        res.cookie("token", token, { httpOnly : true });

        return res.status(200).json({
            message : "Food partner logged in successfully",
            token : token,
            foodPartner : {
                id : foodPartnerExits._id,
                ownerName : foodPartnerExits.ownerName,
                email : foodPartnerExits.email,
                contactNumber : foodPartnerExits.contactNumber,
                restaurantName : foodPartnerExits.restaurantName,
                address : foodPartnerExits.address,
                typeofRestaurant : foodPartnerExits.typeofRestaurant
            }
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const logoutFoodPartner = async (req, res) => {
    try{
        res.clearCookie("token");
        return res.status(200).json({
            message : "Food partner logged out successfully"
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

// reset password through email
// 1. Send email to food partner and user to ask for password reset
export const sendResetPasswordEmail = async (req, res) => {
    try{
        const { email } = req.body;

        if(!email) {
            return res.status(400).json({
                message : "Please provide email"
            })
        }

        const user =  await User.findOne({email});
        const foodPartner = await FoodPartner.findOne({email});


        if(!user && !foodPartner){
            return res.status(404).json({
               message : "User or food partner does not exist"
            })
        };


        // generate token 
        let token; 
        if(user){
            const payload = {
                id : user._id,
                email : user.email
            }
            token =  jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn : 3600
            })
        }else{
            const payload = {
                id : foodPartner._id,
                email : foodPartner.email
            }

            token =  jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn : 3600
            })
        }

        // generate reset password link
        const resetPasswordLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
        const {text, html} = resetMessage(resetPasswordLink);
        const subject = "Password Reset Request";

        if(user){
            await sendEmail(user.email, subject, text, html);
        }
        else{
            await sendEmail(foodPartner.email, subject, text, html);
        }

        return res.status(200).json({
            message : "Password reset email sent successfully"
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

// 2. Food partner and user click on the link in the email and reset password
export const resetPassword = async (req, res) => {
    try{
        const { token } = req.query;
        const {password, confirmPassword} = req.body;

        if(!token){
            return res.status(400).json({
                message : "Please provide token"
            })
        }

        if(!password || !confirmPassword){
            return res.status(400).json({
                message : "Please provide password and confirm password"
            })
        }

        // check if token is valid
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if(!payload){
            return res.status(400).json({
                message : "Token are expired"
            })
        }

        // check if password and confirm password are same
        if(password !== confirmPassword){
            return res.status(400).json({
                message : "Password and confirm password are not same"
            })
        }

        // hasedPassword
        const hashedPassword = await bcrypt.hash(password, 10);

        // check if user exists
        const user =  await User.findOne({_id : payload.id});
        const foodPartner = await FoodPartner.findOne({_id : payload.id});

        if(!user && !foodPartner){
            return res.status(404).json({
                message : "User or food partner does not exist"
            })
        }

        if(user){
            user.password = hashedPassword;
            await user.save();
            return res.status(200).json({
                message : "Password reset successfully"
            })
        }else{
            foodPartner.password = hashedPassword;
            await foodPartner.save();
            return res.status(200).json({
                message : "Password reset successfully"
            })
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}