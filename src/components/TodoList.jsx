import { DeleteButton, UpdateButton } from "./Buttons";

const TodoList = ({ todoList, setTodoList }) => {
  const clickDeleteButtonHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
    localStorage.setItem("todoItem", JSON.stringify(newTodoList));
  };

  const clickUpdateButtonHandler = (id) => {
    const updateTodoList = todoList.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item;
    });

    setTodoList(updateTodoList);
    localStorage.setItem("todoItem", JSON.stringify(updateTodoList));
  };

  const workingTask = todoList.filter((todoList) => !todoList.isDone);
  const doneTask = todoList.filter((todoList) => todoList.isDone);

  return (
    <>
      <div>
        <p className="taskState">진행중 🔥</p>
        <div className="list">
          {workingTask.map(function (item) {
            return (
              <div key={item.id} className="todo">
                <p className="title">{item.title}</p>
                <p className="content">{item.content}</p>
                <br />
                <DeleteButton
                  item={item}
                  clickDeleteButtonHandler={clickDeleteButtonHandler}
                >
                  삭제
                </DeleteButton>
                <UpdateButton
                  item={item}
                  clickUpdateButtonHandler={clickUpdateButtonHandler}
                >
                  완료
                </UpdateButton>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="taskState">완료 ✨</p>
        <div className="list">
          {doneTask.map(function (item) {
            return (
              <div key={item.id} className="todo">
                <p className="title">{item.title}</p>
                <p className="content">{item.content}</p>
                <br />
                <DeleteButton
                  item={item}
                  clickDeleteButtonHandler={clickDeleteButtonHandler}
                >
                  삭제
                </DeleteButton>
                <UpdateButton
                  item={item}
                  clickUpdateButtonHandler={clickUpdateButtonHandler}
                >
                  취소
                </UpdateButton>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
