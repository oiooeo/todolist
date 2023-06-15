const Input = ({ todo, setTodoList, todoList, setTodo }) => {
  const setValue = (event) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  const clickAddButtonHandler = (event) => {
    event.preventDefault();
    const newTodoList = {
      // id: todoList[todoList.length - 1]?.id + 1 || 1,
      id: Date.now(),
      ...todo,
      isDone: false,
    };

    setTodoList([...todoList, newTodoList]);
    setTodo({ title: "", content: "" });
    localStorage.setItem(
      "todoItem",
      JSON.stringify([...todoList, newTodoList])
    );
  };

  return (
    <form className="add-todo" onSubmit={clickAddButtonHandler}>
      <div className="input-group">
        <b>제목</b> &nbsp;
        <input
          name="title"
          value={todo.title}
          onChange={setValue}
          className="input-todoList"
          required
        />
        <b>내용</b> &nbsp;
        <input
          name="content"
          value={todo.content}
          onChange={setValue}
          className="input-todoList"
          required
        />
      </div>
      <button className="addBtn">추가하기</button>
    </form>
  );
};

export default Input;
