import React, { useState } from "react";
import "./Form.css";

import InputZone from "./InputZone";
import ToDoItems from "./ToDoItems";
import { useSelector } from "react-redux";

export default function Form() {
  const count = useSelector((state) => state.todo.td);

  //const checkedCount = count.filter((item) => item.done === true);

  // document.addEventListener("keypress", function (e) {
  //   if (e.key === "Enter") {
  //     addList();
  //   }
  // });
  return (
    <div className="conteiner">
      <InputZone />
      <ToDoItems />
      <div>
        <h2>All-{count.length}</h2>

        <h2>Checked-{count.filter((item) => item.done === true).length}</h2>
        <h2>Unchecked-{count.filter((item) => item.done !== true).length}</h2>
      </div>
    </div>
  );
}
