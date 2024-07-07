import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "../GlobalImports"



const initialState = {
    status: "fulfilled",
    data: []
}

const technicianSlice = createSlice({
    name: "technicians",
    initialState,
    extraReducers: (builder) => {

        builder
            .addCase(getTechniciansAsync.fulfilled,
                (state, action) => {
                    state.status = "fulfilled"
                    state.data = action.payload
                    console.log(state.data);
                })
            .addCase(addTechnicianAsync.fulfilled,
                (state, action) => {
                    state.status = "fulfilled"
                    state.data.push(action.payload)
                })
    },
});

export const getTechniciansAsync = createAsyncThunk(
    "counter/getTechnicians",
    async () => {
        const res = await axios({
            method: "get",
            url: "https://tourist-wheel-server.vercel.app/api/technician",
            headers: {
                authtoken: localStorage.getItem("token")
            }
        })
        return res.data.data;
    }
);

export const addTechnicianAsync = createAsyncThunk(
    "counter/addTechnician",
    async (data) => {
        try {
            const res = await axios({
                method: "post",
                url: "https://tourist-wheel-server.vercel.app/api/technician",
                data: data,
                headers: {
                    authtoken: localStorage.getItem("token")
                }
            })
            message[res.data.success ? 'success' : 'error']("Technician Created successfully");
            return res.data.data;
        } catch (error) {
            message['error']("Could not create Technician")
        }
    }
);


export default technicianSlice.reducer;