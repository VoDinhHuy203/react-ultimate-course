import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, name: "Learning Youtube" },
        { id: 2, name: "Watching TV" },
    ]);

    const name = "Huy";
    const age = 21;
    const data = {
        address: "danang",
        country: "vietnam",
    };

    const addNewTodo = (name) => {
        const newTodo = {
            id: 3,
            name: name,
        };
        setTodoList([...todoList, newTodo]);
    };

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew addNewTodo={addNewTodo} />
            <TodoData name={name} age={age} data={data} todoList={todoList} />
            <div className="todo-image">
                <img src={reactLogo} alt="" className="logo" />
            </div>
        </div>
    );
};

export default App;
