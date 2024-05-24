import { AddForm } from "./components/AddForm";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

//Initialize an empty array to store todo items
let todoItems = [];

export default function TodoApp() {
  //Initialize state, setting it to an empty array
  const [todos, setTodos] = useState(todoItems);

  //Combine todos and setTodos into an object
  const componentProps = { todos, setTodos };

  //Render the TodoApp component
  return (
    <Grid container spacing={4} sx={{ textAlign: "center" }}>
      <Grid item xs={12}>
        {" "}
        <Typography
          variant="h1"
          align="center"
          sx={{ color: "#008080", fontSize: "3rem", fontStyle: "bold" }}
        >
          To-Do List
        </Typography>
      </Grid>

      {/* Render the components and pass them the componentProps */}
      <Grid item xs={12}>
        {" "}
        <AddForm {...componentProps} />
      </Grid>
      <Grid item xs={12}>
        {" "}
        <TodoList {...componentProps} />
      </Grid>
    </Grid>
  );
}
