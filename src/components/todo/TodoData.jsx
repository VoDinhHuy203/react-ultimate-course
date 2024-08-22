const TodoData = (props) => {
    const { name, age, data } = props;

    return (
        <div className="todo-data">
            <div className="todo-text">Learning React</div>
            <div className="todo-text">Watching Youtube</div>
            <div>My name is {name}</div>
        </div>
    );
};

export default TodoData;
