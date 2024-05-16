/* eslint-disable react/prop-types */
import { ListItem } from "./components/ListItems";
import "./TodoListStyles.css"

export default function TodoList({ todos, setTodos }) {
  //handleChange function handles the change in todo item status
  const handleChange = (e) => {
    //Map creates a new array with updated status
    const newTodos = todos.map((todo) => {
      //If the title matches the name, toggle the status
      if (todo.title === e.target.name) {
        return { ...todo, status: !todo.status };
      }
      return { ...todo };
    });

    //sortedTodos sorting the newTodos array to move elements with status=false at the end
    const sortedTodos = (prevTodo, nextTodo) => {
      if (!prevTodo.status && nextTodo.status) {
        return -1; //if the status of the previous todo is false and the status of the next todo is true, the previous todo should come before the next one
      } else if (prevTodo.status && !nextTodo.status) {
        return 1; //if the status of the previous todo is true and the status of the next todo is false, the next todo should come before the previous one
      } else { 
        return 0; //if the statuses of both todos are the same, their order remains unchanged
      }
    };
    newTodos.sort(sortedTodos);

    //updates the state with newTodos
    setTodos(newTodos);
  };

  //using map over todos array to generate list items
  const listItems = todos.map((todo, index) => (
    <ListItem
      key={index}
      todo={todo}
      toggleStatus={handleChange}
      todos={todos}
      setTodos={setTodos}
    />
  ));

  return <ul>{listItems}</ul>;
}
