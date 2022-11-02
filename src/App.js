import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]); //todo 들의 리스트
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo(""); // 버튼을 누르면 폼이 비워지도록
    setTodos((currentArray) => [toDo, ...currentArray]); //입력한 toDo를 추가
    console.log(toDos);
  };
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
