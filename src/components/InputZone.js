import React from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { typing, inputValueFunc } from "../ReduxTool/InputReducer";
import { add } from "../ReduxTool/ListReducer";

function InputZone() {
  const inputValue = useSelector(inputValueFunc);

  const dispatch = useDispatch();

  const addList = () => {
    if (!inputValue) {
      alert("Please Type text");
    } else {
      dispatch(add({ id: uuidv4(), name: inputValue, done: false }));
      dispatch(typing({ name: "" }));
    }
  };

  return (
    <>
      <div>
        <h2 style={{ fontSize: "40px" }}>My To Do List</h2>
      </div>
      <div id="inputZone">
        <input
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addList();
            }
          }}
          onChange={(e) => dispatch(typing({ name: e.target.value }))}
          type="search"
          placeholder="Type your ToDo..."
        />
        <button onClick={() => addList()}>Add</button>
      </div>
    </>
  );
}
export default InputZone;
