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
        setRegisterUser : (state, action : PayloadAction<AuthState>) => {
            state.user = action.payload.user;
        },

        setLoginUser : (state, action : PayloadAction<AuthState>) => {
            state.user = action.payload.user;
        },

        setUserToken : (state, action : PayloadAction<string>) => {
            state.token = action.payload;
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

export const { setRegisterUser, setLoginUser, setUserToken, setLogoutUser } = authSlice.actions;
export default authSlice.reducer;