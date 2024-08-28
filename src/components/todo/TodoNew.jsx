import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("huy");

  const { addNewTodo } = props;
  // addNewTodo("huy");

  const handleOnClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };

  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: "pointer" }} onClick={handleOnClick}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
