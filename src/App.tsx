import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import { useAppDispatch } from "./hooks";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));

    setText("");
  };

  return (
    <div className="App">
      <NewTodoForm title={text} updateText={setText} handleAction={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
