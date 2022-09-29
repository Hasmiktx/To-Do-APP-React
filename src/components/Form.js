import React, { useState } from "react";
import "./Form.css";

import InputZone from "./InputZone";
import ToDoItems from "./ToDoItems";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../ReduxTool/Counter";

export default function Form() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  // document.addEventListener("keypress", function (e) {
  //   if (e.key === "Enter") {
  //     addList();
  //   }
  // });
  return (
    <div className="conteiner">
      <InputZone />
      <ToDoItems />

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <h4>{count}</h4>

      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
