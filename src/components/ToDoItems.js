import React from "react";
import Filter from "./Filter";
import "./Form.css";

import { useDispatch, useSelector } from "react-redux";
import { delList, changeCheck } from "../ReduxTool/ListReducer";

export default function ToDoItems() {
  const li = useSelector((state) => state.todo.td);

  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();

  const list = li.filter((item) => {
    if (filter === "Checked") {
      return item.done;
    } else if (filter === "Unchecked") {
      return !item.done;
    } else {
      return item;
    }
  });
  return (
    <div>
      {list.map((wish) => (
        <div id="wishDiv" key={wish.id}>
          <input
            type="checkbox"
            checked={wish.done}
            onChange={() => dispatch(changeCheck(wish))}
          />
          <div>{wish.name}</div>

          <button onClick={() => dispatch(delList(wish))}>X</button>
        </div>
      ))}

      <Filter />
    </div>
  );
}
