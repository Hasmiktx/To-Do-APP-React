import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { choose } from "../ReduxTool/FilterReducer";
export default function Filter() {
  //const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
        width: "250px",
      }}
    >
      <button className="filter-div" onClick={() => dispatch(choose("All"))}>
        All
      </button>
      <button
        className="filter-div"
        onClick={() => {
          //setActive("Checked");
          dispatch(choose("Checked"));
        }}
      >
        Checked
      </button>
      <button
        className="filter-div"
        onClick={() => {
          //setActive("Unchecked");
          dispatch(choose("Unchecked"));
        }}
      >
        Unchecked
      </button>
    </div>
  );
}
