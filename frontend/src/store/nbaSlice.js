import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import NBAData from "../models/nba-data";

export const nbaSlice = createSlice({
  name: "nba",
  initialState: {
    nba: JSON.parse(JSON.stringify(new NBAData())),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateNBAScore.fulfilled, (state, action) => {
      state.nba = action.payload;
    });
  },
});

//export const { increment, decrement, incrementByAmount } = counterSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
/* export async function updateNBAScore(dispatch, getState) {
  const resdata = await fetch("../../NBA/update", {
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
  return dispatch({ type: "nba/set", payload: resdata.data });
} */

export const updateNBAScore = createAsyncThunk("nba/updateScore", async () => {
  const resdata = await fetch("../../NBA/update", {
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
  return resdata.data;
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//export const selectCount = (state) => state.counter.value;

export default nbaSlice.reducer;
