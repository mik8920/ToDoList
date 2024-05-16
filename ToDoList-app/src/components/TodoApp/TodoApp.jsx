import { AddForm } from "./components/AddForm";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import "./TodoAppStyles.css"

//Initialize an empty array to store todo items
let todoItems = [];

export default function TodoApp() {
  //Initialize state, setting it to an empty array
  const [todos, setTodos] = useState(todoItems);

  //Combine todos and setTodos into an object
  const componentProps = {todos,setTodos}

  //Render the TodoApp component
  return (
    <div>
      <h1>To-Do List</h1>
      
    {/* Render the components and pass them the componentProps */}
      <AddForm {...componentProps} />
      <TodoList {...componentProps} />
    </div>
  );
}
