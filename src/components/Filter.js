import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { choose } from "../ReduxTool/FilterReducer";
export default function Filter() {
  const [active, setActive] = useState("all");
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "40px",
        width: "250px",
      }}
    >
      <button
        className="filter-div"
        style={{ backgroundColor: active === "all" ? "#f44336" : "white" }}
        onClick={() => {
          setActive("all");
          dispatch(choose("All"));
        }}
      >
        All
      </button>
      <button
        className="filter-div"
        style={{ backgroundColor: active === "check" ? "#f44336" : "white" }}
        onClick={() => {
          setActive("check");
          dispatch(choose("Checked"));
        }}
      >
        Checked
      </button>
      <button
        className="filter-div"
        style={{ backgroundColor: active === "uncheck" ? "#f44336" : "white" }}
        onClick={() => {
          setActive("uncheck");
          dispatch(choose("Unchecked"));
        }}
      >
        Unchecked
      </button>
    </div>
  );
}
