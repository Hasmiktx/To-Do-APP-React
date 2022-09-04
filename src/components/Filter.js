import React from "react";
export default class Filter extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          width: "250px",
        }}
      >
        <div
          className="filter-div"
          onClick={() => this.props.onClickFilter("All")}
        >
          All
        </div>
        <div
          className="filter-div"
          onClick={() => this.props.onClickFilter("Checked")}
        >
          Checked
        </div>
        <div
          className="filter-div"
          onClick={() => this.props.onClickFilter("Unchecked")}
        >
          Unchecked
        </div>
      </div>
    );
  }
}
