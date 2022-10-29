import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        logIn(){

        },
        logOut(){

        }
    }
})

export const authAactions = authSlice.actions;
export const authReducer = authSlice.reducer;

