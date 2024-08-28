const TodoData = (props) => {
  const { todoList, deleteTodo } = props;

  console.log(props);

  const handleClick = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className={`todo-item`} key={item.id}>
            {item.name}
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
