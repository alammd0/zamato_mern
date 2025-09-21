import { APIConnector } from "../APIConnector";


// here reset user password
export const sendResetPasswordEmail = async (email : string) => {
    try{
        const response = await APIConnector("POST", "/auth/user/send-reset-password-email", {
            email
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

export const resetPassword = async (email : string, password : string, confirmPassword : string) => {
    try{
        const response = await APIConnector("PUT", "/auth/user/reset-password", {
            email,
            password,
            confirmPassword
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


// here reset food partner password
export const sendResetPasswordEmailFoodPartner = async (email : string) => {
    try{
        const response = await APIConnector("POST", "/auth/foodpartner/send-reset-password-email", {
            email
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

export const resetPasswordFoodPartner = async (email : string, password : string, confirmPassword : string) => {
    try{
        const response = await APIConnector("PUT", "/auth/foodpartner/reset-password", {
            email,
            password,
            confirmPassword
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