import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message, useNavigate } from "../GlobalImports"
import axios from "axios";



const initialState = {
    status: "fulfilled",
    isSignedIn: localStorage.getItem("token") ? true : false,
    user: null
}


const authSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUserAsync.fulfilled,
                (state, action) => {
                    state.status = "fulfilled"
                    state.data = action.payload
                })
            .addCase(loginUserAsync.fulfilled,
                (state, action) => {
                    if (action.payload !== undefined) {
                        state.status = "fulfilled"
                        state.user = action.payload.data
                        state.isSignedIn = true
                        localStorage.setItem("token", action.payload.authToken)
                    }
                    console.log(action.payload);
                })
    },
});


export const getUserAsync = createAsyncThunk(
    "counter/getUser",
    async () => {
        const res = await axios({
            method: "get",
            url: "https://tourist-wheel-server.vercel.app/api/user/",
            headers: { authtoken: localStorage.getItem("token") }
        })
        return res.data.data;
    }
);

export const loginUserAsync = createAsyncThunk(
    "counter/login",
    async (data) => {
        try {
            const res = await axios({
                method: "post",
                url: "https://tourist-wheel-server.vercel.app/api/user/login",
                data
            })
            message['success']("Login successFull")
            return res.data;
        } catch (error) {
            console.log(error);
            message['error']("Could not login check your creds")
        }
    }
);



export default authSlice.reducer;