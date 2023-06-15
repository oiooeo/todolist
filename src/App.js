import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import DeleteButton from "./components/Buttons";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 입문 강의 듣기",
      isDone: true,
    },
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 숙련 강의 듣기",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      content: "리액트 숙련 강의 듣기",
      isDone: false,
    },
  ]);

  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const setValue = (event) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  const clickAddButtonHandler = (event) => {
    event.preventDefault();
    const newTodoList = {
      id: todoList[todoList.length - 1]?.id + 1 || 1,
      ...todo,
      isDone: false,
    };

    setTodoList([...todoList, newTodoList]);
    setTodo({ title: "", content: "" });
  };

  const clickDeleteButtonHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const workingTask = todoList.filter((todoList) => !todoList.isDone);
  const doneTask = todoList.filter((todoList) => todoList.isDone);

  return (
    <div className="layout">
      <header className="header">MY TO-DO LIST</header>

      <Input
        clickAddButtonHandler={clickAddButtonHandler}
        todo={todo}
        setValue={setValue}
      ></Input>

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
                <button className="updateBtn">완료</button>
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
                <button className="updateBtn">취소</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
