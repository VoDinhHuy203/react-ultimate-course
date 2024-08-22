const TodoNew = (props) => {
    console.log(props);

    const { addNewTodo } = props;
    // addNewTodo("huy");

    const handleOnClick = () => {
        alert("handleOnClick");
    };

    const handleOnChange = (name) => {
        console.log(name);
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
        </div>
    );
};

export default TodoNew;
