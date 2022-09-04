import React from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";
import InputZone from "./InputZone";
import ToDoItems from "./ToDoItems";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "All",
      input: "",
      list: [
        {
          id: uuidv4(),
          name: "your first ToDo",
          done: false,
        },
      ],
    };
  }

  onChange = (e) => {
    this.setState({ input: e.target.value });
  };
  addList = () => {
    this.setState({
      list: [
        ...this.state.list,
        { id: uuidv4(), name: this.state.input, done: false },
      ],
      input: "",
    });
    //console.log(this.state.list);
  };

  listDelete = (wish) => {
    const newStateArr = [...this.state.list];
    newStateArr.splice(newStateArr.indexOf(wish), 1);

    this.setState({ list: newStateArr });
  };

  onChangeCheck = (wish) => {
    const checkedArr = this.state.list.map((item) => {
      if (item.id === wish.id) {
        item.done = !item.done;
      }
      return item;
    });

    console.log(checkedArr);
    this.setState({
      list: checkedArr,
    });
  };

  onClickFilter = (choose) => {
    this.setState({
      filter: choose,
    });
  };
  // if (this.state.filter === "All") {
  //   this.setState({
  //     list: [...this.state.list],
  //   });
  // } else if (this.state.filter === "Checked") {
  //   const checkedList = this.state.list.filter((item) => item.done);
  //   this.setState({
  //     list: checkedList,
  //   });
  // } else {
  //   this.setState({
  //     list: [...this.state.list].filter((item) => !item.done),
  //   });
  // }

  render() {
    return (
      <div className="conteiner">
        <InputZone
          state={this.state}
          addList={this.addList}
          onChange={this.onChange}
        />
        <ToDoItems
          state={this.state}
          listDelete={this.listDelete}
          onChangeCheck={this.onChangeCheck}
          onClickFilter={this.onClickFilter}
          list={this.state.list.filter((item) => {
            if (this.state.filter === "Checked") {
              return item.done;
            } else if (this.state.filter === "Unchecked") {
              return !item.done;
            } else {
              return item;
            }
          })}
        />
      </div>
    );
  }
}
