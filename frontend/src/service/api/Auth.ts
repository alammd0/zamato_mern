import type { Register, RegisterFoodPartner } from "../../types";
import { APIConnector } from "../APIConnector";

export const registerUser = async ({fullname, email, password} : Register) => {
    try {
        const response = await APIConnector("POST", "/auth/user/register", {
            fullname,
            email,
            password
        } , 
        {
            "Content-Type" : "application/json"
        });
        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export const loginUser = async ({email, password} : Register) => {
    try {
        const response = await APIConnector("POST", "/auth/user/login", {
            email,
            password
        } , 
        {
            "Content-Type" : "application/json"
        });
        return response;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export const logOutUser = async () => {
    try{
        const response = await APIConnector("GET", "/auth/user/logout", null, 
        {
            "Content-Type" : "application/json"
        });
        return response;
    }catch(err){
        console.error(err);
        throw err;
    }
}

export const registerFoodPartner = async ({ownerName, email, contactNumber, restaurantName, profileImage, address, typeofRestaurant, password} : RegisterFoodPartner) => {
    try{
        const response = await APIConnector("POST", "/auth/foodpartner/register", {
            ownerName,
            email,
            contactNumber,
            restaurantName,
            profileImage,
            address,
            typeofRestaurant,
            password
        } , 
        {
            "Content-Type" : "application/json"
        });
        return response;
    }catch(err){
        console.error(err);
        throw err;
    }
}

export const loginFoodPartner = async ({email, password} : RegisterFoodPartner) => {
    try{
        const response = await APIConnector("POST", "/auth/foodpartner/login", {
            email,
            password
        } , 
        {
            "Content-Type" : "application/json"
        });
        return response;
    }catch(err){
        console.error(err);
        throw err;
    }
}

export const logOutFoodPartner = async () => {
    try{
        const response = await APIConnector("GET", "/auth/foodpartner/logout", null, 
        {
            "Content-Type" : "application/json"
        });
        return response;
    }catch(err){
        console.error(err);
        throw err;
    }
}