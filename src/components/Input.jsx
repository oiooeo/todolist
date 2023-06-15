const Input = ({ clickAddButtonHandler, todo, setValue }) => {
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
