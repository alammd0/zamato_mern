import type { Register } from "../../types";
import { APIConnector } from "../APIConnector";

export const registerUser = async ({fullname, email, password} : Register) => {
    try {
        const response = await APIConnector("POST", "/auth/register", {
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
        const response = await APIConnector("POST", "/auth/login", {
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