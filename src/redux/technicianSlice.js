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
                    state.data = action.payload.apiPage === 1 ? action.payload.data : [...state.data, ...action.payload.data]
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
                    state.selectedTechnician = action.payload
                })
            .addCase(updateTechnicianAsync.fulfilled,
                (state, action) => {
                    const filtered = state.data.map((technician) => {
                        if (technician._id !== action.payload._id) {
                            console.log({ tid: technician._id, pid: action.payload._id });
                            return technician
                        }
                        return action.payload
                    })
                    console.log({ filtered });
                    state.data = filtered
                })
    },
});

export const getTechniciansAsync = createAsyncThunk(
    "technicians/getTechnicians",
    async (apiPage) => {
        const res = await axios({
            method: "get",
            url: `https://${process.env.REACT_APP_SERVER_HOST}/api/technician?page=${apiPage}`,
            headers: {
                authtoken: localStorage.getItem("token")
            }
        })
        return { data: res.data.data, apiPage };
    }
);

export const addTechnicianAsync = createAsyncThunk(
    "technicians/addTechnician",
    async (data) => {
        try {
            const res = await axios({
                method: "post",
                url: `https://${process.env.REACT_APP_SERVER_HOST}/api/technician`,
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
        console.log({ data: data.technicianId });
        try {
            const res = await axios({
                method: "patch",
                url: `https://${process.env.REACT_APP_SERVER_HOST}/api/technician?technicianId=${data.technicianId}`,
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
                url: `https://${process.env.REACT_APP_SERVER_HOST}/api/technician?technicianId=${technicianId}`,
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
                url: `https://${process.env.REACT_APP_SERVER_HOST}/api/technician/${technicianId}`,
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