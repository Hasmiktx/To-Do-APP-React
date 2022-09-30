import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
};

export const inputSlice = createSlice({
  name: "inputState",
  initialState,
  reducers: {
    typing: (state, action) => {
      state.input = action.payload.name;
    },
  },
});
export const inputValueFunc = (state) => state.inputState.input;
export const { typing } = inputSlice.actions;

export default inputSlice.reducer;
