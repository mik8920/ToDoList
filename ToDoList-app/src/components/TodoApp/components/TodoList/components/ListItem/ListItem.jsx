/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Checkbox, Button, ListItemText, Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ListItem({ todo, toggleStatus, todos, setTodos }) {
  //handleRemoval function removes todo items
  const handleRemoval = (todoTitle) => {
    //filters out todos and updates the state with a new array]
    const newTodos = todos.filter((todo) => todoTitle !== todo.title);
    setTodos(newTodos);
  };

  return (
    <ListItemText>
      <Paper
        elevation={3}
        square={false}
        sx={{ margin: "0.5rem", width: "fit-content", padding: "0.5rem", width:'32rem'  }}
      >
        <Grid
          container
          direction="row"
          spacing={1}
          sx={{ justifyContent: "space-between", alignItems:"center" }}
        >
          <Grid Item>
            <Checkbox
              name={todo.title}
              checked={todo.status}
              onChange={toggleStatus}
            />
            <span
              style={{ textDecoration: todo.status ? "line-through" : "none" }}
            >
              {todo.title}
            </span>
          </Grid>
          <Grid Item>
            <Button
              onClick={() => handleRemoval(todo.title)}
              size="medium"
              style={{ color: "#B197FC" }}
              endIcon={<FontAwesomeIcon icon={faTrash} />}
            />
          </Grid>
        </Grid>
      </Paper>
    </ListItemText>
  );
}
