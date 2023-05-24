import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MLBData from '../models/MLB-data.json'

export const mlbSlice = createSlice({
    name: "mlb",
    initialState: {
        mlb: {},
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(updateMLBScore.fulfilled, (state, action) => {
            state.mlb = action.payload
        })
    }
});

export const updateMLBScore = createAsyncThunk("mlb/updateScore", async () => {
    const resdata = await fetch("../../MLB/update", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Server Error");
        }
    });
    return resdata.data
});

export default mlbSlice.reducer