import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = [
  {
    id: uuidv4(),
    name: "your first todo...",
    done: false,
  },
];

export const listSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    delList: (state, action) => {
      // console.log(action.payload.list.indexOf(action.payload.wish));
      // state = action.payload.list.splice(
      //   action.payload.list.indexOf(action.payload.wish)
      // );
      state = state.filter((item) => {
        console.log(item.name);
        return item.id !== action.payload.id;
      });
      console.log(state.todo);
    },
    changeCheck: (state, action) => {
      state = state.map((item) => {
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
