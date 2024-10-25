import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "../GlobalImports";
import axios from "axios";



const initialState = {
    status: "fulfilled",
    data: []
}

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getEmployeesAsync.pending,
                (state) => {
                    // state.status = "pending"
                })
            .addCase(getEmployeesAsync.fulfilled,
                (state, action) => {
                    state.status = "fulfilled"
                    state.data = action.payload
                })
            .addCase(addEmployeeAsync.fulfilled,
                (state, action) => {
                    state.data.push(action.payload)
            })
    },
});


export const getEmployeesAsync = createAsyncThunk(
    "counter/getEmployees",
    async () => {
        const res = await axios({
            method: "get",
            url: `https://${process.env.REACT_APP_SERVER_HOST}/api/employee`,
            headers: {
                authtoken: localStorage.getItem("token")
            }
        })
        return res.data.data;
    }
);

export const addEmployeeAsync = createAsyncThunk(
    "counter/addEmployee",
    async (data) => {
        try {
            const res = await axios({
                method: "post",
                url: `https://${process.env.REACT_APP_SERVER_HOST}/api/employee`,
                data: data,
                headers: {
                    authtoken: localStorage.getItem("token")
                }
            })
            message[res.data.success ? 'success' : 'error']("Empolyee Created successfully");
            return res.data.data;
        } catch (error) {
            message['error']("Could not create Employee")
        }
    }
);


export default employeesSlice.reducer;