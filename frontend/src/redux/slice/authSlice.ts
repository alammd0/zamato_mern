import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    user : {
        _id : string,
        email : string,
        fullname : string
    },
    token : string
}

const initialState: AuthState = {
    user : {
        _id : "",
        email : "",
        fullname : "",
    },
    token : ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        registerUser : (state, action : PayloadAction<AuthState>) => {
            state.user = action.payload.user;
        },

        loginUser : (state, action : PayloadAction<AuthState>) => {
            state.user = action.payload.user;
        },

        setToken : (state, action : PayloadAction<string>) => {
            state.token = action.payload;
        },

        logoutUser : (state) => {
            state.user = {
                _id : "",
                email : "",
                fullname : ""
            }
            state.token = "";
        }
    }
});

export const { registerUser, loginUser, setToken,logoutUser } = authSlice.actions;
export default authSlice.reducer;