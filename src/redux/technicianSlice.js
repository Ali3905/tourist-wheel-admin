import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "../GlobalImports"



const initialState = {
    status: "fulfilled",
    data: [],
    selectedTechnician: {},
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
            .addCase(deleteTechnicianAsync.fulfilled,
                (state, action) => {
                    state.data = state.data.filter(technician => technician._id !== action.payload)
                })
            .addCase(getTechnicianByIdAsync.fulfilled,
                (state, action) => {
                    console.log({ pay: action.payload });
                    state.selectedTechnician = action.payload
                })
            .addCase(updateTechnicianAsync.fulfilled,
                (state, action) => {
                    const filtered = state.data.map((technician) => {
                        if (technician._id !== action.payload._id) {
                            console.log({tid: technician._id, pid: action.payload._id});
                            return technician
                        }
                        return action.payload
                    })
                    console.log({filtered});
                    state.data = filtered
                })
    },
});

export const getTechniciansAsync = createAsyncThunk(
    "technicians/getTechnicians",
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
    "technicians/addTechnician",
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

export const updateTechnicianAsync = createAsyncThunk(
    "technicians/updateTechnician",
    async (data) => {
        console.log({data: data.technicianId});
        try {
            const res = await axios({
                method: "patch",
                url: `https://tourist-wheel-server.vercel.app/api/technician?technicianId=${data.technicianId}`,
                data: data,
                headers: {
                    authtoken: localStorage.getItem("token")
                }
            })
            message[res.data.success ? 'success' : 'error']("Technician Updated successfully");
            return res.data.data;
        } catch (error) {
            message['error']("Could not update Technician")
        }
    }
);

export const deleteTechnicianAsync = createAsyncThunk(
    "technicians/deleteTechnician",
    async (technicianId) => {
        try {
            const res = await axios({
                method: "delete",
                url: `https://tourist-wheel-server.vercel.app/api/technician?technicianId=${technicianId}`,
                headers: {
                    authtoken: localStorage.getItem("token")
                }
            })
            message[res.data.success ? 'success' : 'error']("Technician deleted successfully");
            return technicianId
        } catch (error) {
            message['error']("Could not delete Technician")
        }
    }
)

export const getTechnicianByIdAsync = createAsyncThunk(
    "technicians/getTechnicianById",
    async (technicianId) => {
        try {
            const res = await axios({
                method: "get",
                url: `https://tourist-wheel-server.vercel.app/api/technician/${technicianId}`,
                headers: {
                    authtoken: localStorage.getItem("token")
                }
            })
            return res.data.data
        } catch (error) {
            message['error']("Could not find Technician check the ID")
        }
    }
)


export default technicianSlice.reducer;