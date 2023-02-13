import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";
const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  // Here is reducers and ...
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    // When addCar is called, we reset name and cost to zero
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
// Here is reducer
export const formReducer = formSlice.reducer;
