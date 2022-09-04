import React from "react";
import "./Form.css";
export default function inputZone(props) {
  return (
    <>
      <div>
        <h2>My To Do List</h2>
      </div>
      <div id="inputZone">
        <input
          value={props.state.input}
          onChange={props.onChange}
          type="search"
          placeholder="Type your ToDo..."
        />
        <button onClick={props.addList}>Add</button>
      </div>
    </>
  );
}
