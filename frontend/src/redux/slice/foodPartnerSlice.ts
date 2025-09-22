import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { FoodPosts, FoodReels } from "../../types";

export interface FoodPartner {
    _id : string,
    ownerName : string,
    email : string,
    contactNumber : number,
    restaurantName : string,
    profileImage : string,
    address : string,
    typeofRestaurant : string,
    foodReels : Array<FoodReels>,
    foodPosts : Array<FoodPosts>
}

export interface FoodPartnerState {
    foodPartner : FoodPartner,
    token : string
}

const initialState: FoodPartnerState = {
  foodPartner: {
    _id: "",
    ownerName: "",
    email: "",
    contactNumber: 0,
    restaurantName: "",
    profileImage: "",
    address: "",
    typeofRestaurant: "",
    foodReels: [],
    foodPosts: [],
  },
  token: "",
};

export const FoodPartnerSlice = createSlice({
    name: "foodPartner",
    initialState,
    reducers : {
        setRegisterFoodPartner : (state, action : PayloadAction<FoodPartner>) => {
            state.foodPartner = action.payload;
        },

        setLoginFoodPartner : (state, action : PayloadAction<FoodPartner>) => {
            state.foodPartner = action.payload;
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
                typeofRestaurant : "",
                foodReels : [],
                foodPosts : []
            }
            state.token = "";
        },
    }
});

export const { setRegisterFoodPartner, setLoginFoodPartner, setFoodPartnerToken, setLogoutFoodPartner } = FoodPartnerSlice.actions;
export default FoodPartnerSlice.reducer;