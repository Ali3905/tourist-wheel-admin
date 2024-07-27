import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "../GlobalImports";
import axios from "axios";



const initialState = {
    status: "fulfilled",
    data: []
}

const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getDailyRoutesAsync.fulfilled,
                (state, action) => {
                    state.status = "fulfilled"
                    console.log(action.payload, "payl");
                    state.data = action.payload
                })
            .addCase(addDailyRouteAsync.fulfilled,
                (state, action) => {
                    state.data.push(action.payload)
            })
            .addCase(finalizeDailyRouteAsync.fulfilled,
                (state, action) => {
                    // state.data.push(action.payload)
            })
    },
});


export const getDailyRoutesAsync = createAsyncThunk(
    "counter/getDailyRoutes",
    async () => {
        const res = await axios({
            method: "get",
            url: `https://${process.env.REACT_APP_SERVER_HOST}/api/dailyRoute`
        })
        return res.data.data;
    }
);

export const addDailyRouteAsync = createAsyncThunk(
    "counter/addDailyRoute",
    async (data) => {
        try {
            const res = await axios({
                method: "post",
                url: `https://${process.env.REACT_APP_SERVER_HOST}/api/dailyRoute`,
                data: data
            })
            message[res.data.success ? 'success' : 'error']("Vehicle Created successfully");
            return res.data.data;
        } catch (error) {
            message['error']("Could not create Vehicle")
        }
    }
);

export const finalizeDailyRouteAsync = createAsyncThunk(
    "counter/finalizeDailyRoute",
    async (data, routeId) => {
        try {
            const res = await axios({
                method: "patch",
                url: `https://${process.env.REACT_APP_SERVER_HOST}/api/dailyRoute/${routeId}`,
                data: data
            })
            message[res.data.success ? 'success' : 'error']("Vehicle finalized successfully");
            return res.data.data;
        } catch (error) {
            message['error']("Could not create Vehicle")
        }
    }
);


export default vehiclesSlice.reducer;