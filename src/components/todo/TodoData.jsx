const TodoData = (props) => {
  const { todoList } = props;

  console.log(props);

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log("check map: ", item, index);
        return (
          <div className={`todo-item`}>
            {item.name}
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
