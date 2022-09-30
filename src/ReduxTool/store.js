import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./InputReducer";
import listReducer from "./ListReducer";
import filterReducer from "./FilterReducer";

const store = configureStore({
  reducer: {
    inputState: inputReducer,
    todo: listReducer,
    filter: filterReducer,
  },
});

export default store;
