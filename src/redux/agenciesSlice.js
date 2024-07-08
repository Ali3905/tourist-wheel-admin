import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { message } from "../GlobalImports"
import axios from "axios";



const initialState = {
    status: "fulfilled",
    data: []
}

const agenciesSlice = createSlice({
    name: "agencies",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAgenciesAsync.fulfilled,
                (state, action) => {
                    state.status = "fulfilled"
                    const filtered = action.payload.map((agency) => {
                        return { ...agency, noOfDrivers: agency.drivers.length, noOfVehicles: agency.vehicles.length };
                    });

                    state.data = filtered
            })
    },
});


export const getAgenciesAsync = createAsyncThunk(
    "counter/getAgencies",
    async () => {
        const res = await axios({
            method: "get",
            url: "https://tourist-wheel-server.vercel.app/api/user/AGENCY",
            headers: { authtoken: localStorage.getItem("token") }
        })
        return res.data.data;
    }
);



export default agenciesSlice.reducer;