import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      list: [],
    };
  }

  addList = () => {
    this.setState({
      list: this.state.list.concat(this.state.input),
    });
    //console.log(this.state.list);
  };

  listDelete = (li) => {
    this.state.list.splice(this.state.list.indexOf(li), 1);

    this.setState({ list: this.state.list });
  };

  render() {
    return (
      <div className="conteiner">
        <h2>My To Do List</h2>
        <div id="inputZone">
          <input
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
            type="search"
            placeholder="Type your ToDo..."
          />
          <button onClick={this.addList}>Add</button>
        </div>
        <div>
          <ul>
            {this.state.list.map((wish) => (
              <div id="wishDiv">
                <li
                  onClick={(e) => {
                    this.listDelete(wish);
                  }}
                >
                  {wish}
                </li>
                <input type="checkbox" />
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
