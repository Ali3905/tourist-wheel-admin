import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "../GlobalImports";
import axios from "axios";



const initialState = {
    status: "fulfilled",
    data: []
}

const driversSlice = createSlice({
    name: "drivers",
    initialState,
    extraReducers: (builder) => {

        builder
            .addCase(getDriversAsync.pending,
                (state) => {
                    // state.status = "pending"
                })
            .addCase(getDriversAsync.fulfilled,
                (state, action) => {
                    state.status = "fulfilled"
                    state.data = action.payload
                })
            .addCase(addDriverAsync.fulfilled,
                (state, action) => {
                    state.data.push(action.payload)
                })
    },
});


export const getDriversAsync = createAsyncThunk(
    "counter/getDrivers",
    async () => {
        const res = await axios({
            method: "get",
            url: `https://${process.env.REACT_APP_SERVER_HOST}/api/driver`,
            headers: {
                authtoken: localStorage.getItem("token")
            }
        })
        return res.data.data;
    }
);

export const addDriverAsync = createAsyncThunk(
    "counter/addDriver",
    async (data) => {
        try {
            console.log(localStorage.getItem("token"));
            const res = await axios({
                method: "post",
                url: `https://${process.env.REACT_APP_SERVER_HOST}/api/driver`,
                data: data,
                headers: {
                    authtoken: localStorage.getItem("token")
                }
            })
            message[res.data.success ? 'success' : 'error']("Driver Created successfully");
            return res.data.data;
        } catch (error) {
            message['error']("Could not create driver")
        }
    }
);

export const { addDriver } = driversSlice.actions;

export default driversSlice.reducer;