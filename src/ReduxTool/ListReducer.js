import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  td: [
    {
      id: uuidv4(),
      name: "your first todo...",
      done: false,
    },
  ],
};

export const listSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.td.push(action.payload);
    },
    delList: (state, action) => {
      state.td = state.td.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    changeCheck: (state, action) => {
      state.td = state.td.map((item) => {
        if (item.id === action.payload.id) {
          item.done = !item.done;
        }
        return item;
      });
    },
  },
});

export const { add, delList, changeCheck } = listSlice.actions;

export default listSlice.reducer;
