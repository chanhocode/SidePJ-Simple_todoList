import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import LIsts from "./components/LIsts";



const initialTodoData = localStorage.getItem("todoData")? JSON.parse(localStorage.getItem("todoData")) : []
;export default function App() {
  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 되는걸 막아줌
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    localStorage.setItem('todoData',JSON.stringify([...todoData, newTodo]))

    setValue("");
  };
  const handleRemoveClick=()=>{
    setTodoData([])
    localStorage.setItem('todoData',JSON.stringify([]))

  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <LIsts todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
