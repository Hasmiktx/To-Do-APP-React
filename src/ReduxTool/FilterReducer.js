import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filter: "All",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    choose: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { choose } = filterSlice.actions;

export default filterSlice.reducer;
