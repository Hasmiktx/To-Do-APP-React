import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import inputReducer from "./Input";
import listReducer from "./List";
import filterReducer from "./FilterReducer";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    inputState: inputReducer,
    todo: listReducer,
    filter: filterReducer,
  },
});

export default store;
