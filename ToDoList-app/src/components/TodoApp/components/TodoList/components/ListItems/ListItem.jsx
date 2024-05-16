/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import "./ListItemsStyles.css";

export default function ListItem({ todo, toggleStatus, todos, setTodos }) {
  //handleRemoval function removes todo items
  const handleRemoval = () => {
    //filters out todos and updates the state with a new array
    const newTodos = todos.filter((index) => todo !== index);
    setTodos(newTodos);
  };

  return (
    <div className="listItems">
    <li>
      <input
        type="checkbox"
        name={todo.title}
        checked={todo.status}
        onChange={toggleStatus}
      />
      <span style={{ textDecoration: todo.status ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={handleRemoval}>X</button>
    </li>
    </div>
  );
}
