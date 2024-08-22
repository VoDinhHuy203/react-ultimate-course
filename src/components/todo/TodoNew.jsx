import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("huy");

    const { addNewTodo } = props;
    // addNewTodo("huy");

    const handleOnClick = () => {
        console.log(valueInput);
    };

    const handleOnChange = (name) => {
        setValueInput(name);
    };

    return (
        <div className="todo-input">
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }} onClick={handleOnClick}>
                Add
            </button>
            <div>My text input is {valueInput}</div>
        </div>
    );
};

export default TodoNew;
