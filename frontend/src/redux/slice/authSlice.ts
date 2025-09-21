import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    user : {
        _id : string,
        email : string,
        fullname : string
    },

    foodPartner : {
        _id : string,
        ownerName : string,
        email : string,
        contactNumber : number,
        restaurantName : string,
        profileImage : string,
        address : string,
        typeofRestaurant : string
    },

    token : string
}

const initialState: AuthState = {
    user : {
        _id : "",
        email : "",
        fullname : "",
    },
    foodPartner : {
        _id : "",
        ownerName : "",
        email : "",
        contactNumber : 0,
        restaurantName : "",
        profileImage : "",
        address : "",
        typeofRestaurant : ""
    },
    token : ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        setRegisterUser : (state, action : PayloadAction<AuthState>) => {
            state.user = action.payload.user;
        },

        setLoginUser : (state, action : PayloadAction<AuthState>) => {
            state.user = action.payload.user;
        },

        setUserToken : (state, action : PayloadAction<string>) => {
            state.token = action.payload;
        },

        setRegisterFoodPartner : (state, action : PayloadAction<AuthState>) => {
            state.foodPartner = action.payload.foodPartner;
        },

        setLoginFoodPartner : (state, action : PayloadAction<AuthState>) => {
            state.foodPartner = action.payload.foodPartner;
        },

        setFoodPartnerToken : (state, action : PayloadAction<string>) => {
            state.token = action.payload;
        },

        setLogoutFoodPartner : (state) => {
            state.foodPartner = {
                _id : "",
                ownerName : "",
                email : "",
                contactNumber : 0,
                restaurantName : "",
                profileImage : "",
                address : "",
                typeofRestaurant : ""
            }
            state.token = "";
        },

        setLogoutUser : (state) => {
            state.user = {
                _id : "",
                email : "",
                fullname : ""
            }
            state.token = "";
        }
    }
});

export const { setRegisterUser, setLoginUser, setUserToken, setLogoutUser, setRegisterFoodPartner, setLoginFoodPartner, setFoodPartnerToken, setLogoutFoodPartner } = authSlice.actions;
export default authSlice.reducer;