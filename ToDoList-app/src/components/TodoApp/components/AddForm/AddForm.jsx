/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import "./AddFormStyles.css";

export default function AddForm({ todos, setTodos }) {
  const [todoVal, setTodoVal] = useState(""); //Holds the value of the input field
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null); //Reference to the input field DOM element

  //handleReset function resets the form
  const handleReset = (e) => {
    setTodoVal("");
    setErrorMessage("");
    e.target.reset();
  };

  //handleAddition function adds new todo items
  const handleAddition = (e) => {
    const newTodos = [...todos]; //clone of todos array
    newTodos.push({
      title: todoVal,
      status: false,
    });
    setTodos(newTodos); //updating the state 
    handleReset(e);
  };

  //handleSubmit function handles form submission + validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoVal === "") {
      setErrorMessage("Input cannot be empty");
      inputRef.current.style.outline= "1px solid red";

      return;
    } else {
      inputRef.current.style.outline= "1px solid lightgrey";

      handleAddition(e);
    }
  };

  //handleChange function handle changes in the input field
  const handleChange = (e) => {
    setTodoVal(e.target.value);
  };

  return (
    <div>
      <form action="" className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to-do"
          name="todoName"
          onChange={handleChange}
          ref={inputRef} //Referencing the input field
        />
        <button type="submit">Add To-Do</button>
      </form>

      {errorMessage && <p className="errorMessage">{errorMessage}</p>}


{/*  if todos array=0 they are no todos*/}
      {todos.length === 0 && (
        <p className="addTodoMessage">
          You do not have any todos yet. Add one now!
        </p>
      )}
    </div>
  );
}
