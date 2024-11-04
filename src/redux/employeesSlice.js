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
            .addCase(deleteEmployeeAsync.fulfilled,
                (state, action) => {
                    state.data = state.data.filter(employee => employee._id !== action.payload)
                })
            .addCase(updateEmployeeAsync.fulfilled,
                (state, action) => {
                    const filtered = state.data.map((emp) => {
                        if (emp._id !== action.payload._id) {
                            return emp
                        }
                        return action.payload
                    })
                    state.data = filtered
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

export const updateEmployeeAsync = createAsyncThunk(
    "employees/updateEmployee",
    async (data) => {
        try {
            const res = await axios({
                method: "patch",
                url: `https://${process.env.REACT_APP_SERVER_HOST}/api/employee?employeeId=${data.employeeId}`,
                data: data,
                headers: {
                    authtoken: localStorage.getItem("token")
                }
            })
            message[res.data.success ? 'success' : 'error']("Employee Updated successfully");
            return res.data.data;
        } catch (error) {
            message['error']("Could not update Employee")
        }
    }
);


export const deleteEmployeeAsync = createAsyncThunk(
    "employees/deleteEmployee",
    async (employeeId) => {
        try {
            const res = await axios({
                method: "delete",
                url: `https://${process.env.REACT_APP_SERVER_HOST}/api/employee?employeeId=${employeeId}`,
                headers: {
                    authtoken: localStorage.getItem("token")
                }
            })
            message[res.data.success ? 'success' : 'error']("Employee deleted successfully");
            return employeeId
        } catch (error) {
            message['error']("Could not delete Employee")
        }
    }
)


export default employeesSlice.reducer;