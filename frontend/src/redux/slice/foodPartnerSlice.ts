import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { FoodPosts, FoodReels } from "../../types";

export interface FoodPartnerState {
    foodPartner : {
        _id : string,
        ownerName : string,
        email : string,
        contactNumber : number,
        restaurantName : string,
        address : string,
        typeofRestaurant : string,
        foodReels : FoodReels[],
        foodPosts : FoodPosts[]
    },
    token : string
}

const initialState: FoodPartnerState = {
    foodPartner : {
        _id : "",
        ownerName : "",
        email : "",
        contactNumber : 0,
        restaurantName : "",
        address : "",
        typeofRestaurant : "",
        foodReels : [],
        foodPosts : []
    },
    token : ""
}

export const FoodPartnerSlice = createSlice({
    name: "foodPartner",
    initialState,
    reducers : {
        setRegisterFoodPartner : (state, action : PayloadAction<FoodPartnerState>) => {
            state.foodPartner = action.payload.foodPartner;
        },

        setLoginFoodPartner : (state, action : PayloadAction<FoodPartnerState>) => {
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
                address : "",
                typeofRestaurant : "",
                foodReels : [],
                foodPosts : []
            }
            state.token = "";
        }
    }
});

export const { setRegisterFoodPartner, setLoginFoodPartner, setFoodPartnerToken, setLogoutFoodPartner } = FoodPartnerSlice.actions;
export default FoodPartnerSlice.reducer;