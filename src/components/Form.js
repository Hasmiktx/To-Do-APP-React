import "./Form.css";

import InputZone from "./InputZone";
import ToDoItems from "./ToDoItems";
import { useSelector } from "react-redux";

export default function Form() {
  const count = useSelector((state) => state.todo.td);

  return (
    <div className="conteiner">
      <InputZone />
      <ToDoItems />
      <div style={{ display: "flex" }}>
        <h3 style={{ marginLeft: "10px" }}>All-{count.length}</h3>

        <h3 style={{ marginLeft: "10px" }}>
          Checked-{count.filter((item) => item.done === true).length}
        </h3>
        <h3 style={{ marginLeft: "10px" }}>
          Unchecked-{count.filter((item) => item.done !== true).length}
        </h3>
      </div>
    </div>
  );
}
