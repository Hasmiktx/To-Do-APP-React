import React from "react";
import Filter from "./Filter";
import "./Form.css";
import ToDoItem from "./ToDoItem";
export default function ToDoItems(props) {
  return (
    <div>
      {props.list.map((wish) => (
        <div
          id="wishDiv"
          key={wish.id}
          onClick={(e) => {
            // console.log(e.target, "e.targ");
            // console.log(e.currentTarget, "e.curtarg");
          }}
        >
          <input
            type="checkbox"
            checked={props.state.done}
            onChange={() => props.onChangeCheck(wish)}
          />
          <ToDoItem wishName={wish.name} />

          <button
            onClick={() => {
              props.listDelete(wish);
            }}
          >
            X
          </button>
        </div>
      ))}

      <Filter onClickFilter={props.onClickFilter} />
    </div>
  );
}
