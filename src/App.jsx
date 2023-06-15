import { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const localData = localStorage.getItem("todoItem");
  const [todoList, setTodoList] = useState(() => {
    return localData
      ? JSON.parse(localData)
      : [
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
        ];
  });

  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  return (
    <div className="layout">
      <header className="header">MY TO-DO LIST</header>

      <Input
        todo={todo}
        setTodoList={setTodoList}
        todoList={todoList}
        setTodo={setTodo}
      ></Input>

      <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
    </div>
  );
}

export default App;
