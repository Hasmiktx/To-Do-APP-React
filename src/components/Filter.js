import React from "react";
import { useDispatch } from "react-redux";
import { choose } from "../ReduxTool/FilterReducer";
export default function Filter() {
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
      <div className="filter-div" onClick={() => dispatch(choose("All"))}>
        All
      </div>
      <div className="filter-div" onClick={() => dispatch(choose("Checked"))}>
        Checked
      </div>
      <div className="filter-div" onClick={() => dispatch(choose("Unchecked"))}>
        Unchecked
      </div>
    </div>
  );
}
