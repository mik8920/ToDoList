/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { Button, TextField, Typography, Grid } from "@mui/material";

export default function AddForm({ todos, setTodos }) {
  const [inputVal, setinputVal] = useState(""); //Holds the value of the input field
  const inputRef = useRef(null); //Reference to the input field DOM element
  const [inputInvalid, setInputInvalid] = useState(false);

  //handleReset function resets the form
  const handleReset = (e) => {
    setinputVal("");
    e.target.reset();
  };

  //handleAddition function adds new todo items
  const handleAddition = (e) => {
    const newTodos = [...todos]; //copy of todos array to avoid mutating state
    newTodos.push({
      title: inputVal,
      status: false,
    });
    setTodos(newTodos); //updating the state
    handleReset(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputVal) {
      setInputInvalid(true);
      return;
    }
    setInputInvalid(false);
    handleAddition(e);
  };

  //handleChange function handles changes in the input field
  const handleChange = (e) => {
    if (inputInvalid) {
      setInputInvalid(false);
    }
    setinputVal(e.target.value);
  };

  return (
    <Grid container spacing={1} sx={{ justifyContent: "center" }}>
      <Grid item xs={12} >
        <form action="" className="todoForm" onSubmit={handleSubmit} noValidate>
          <Grid container direction='row' spacing={2} sx={{justifyContent:"center"}}> 
            <Grid item>
              <TextField
                size="small"
                placeholder="Add to-do"
                name="todoName"
                helperText={inputInvalid ? "Input cannot be empty" : ""}
                value={inputVal}
                error={inputInvalid}
                onChange={handleChange}
                inputRef={inputRef} //Referencing the input field
                required
              />
            </Grid>

            <Grid item>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: "primary",
                  backgroundColor: "#20b2aa",
                  "&:hover": {
                    backgroundColor: "#20b2aa",
                  },
                }}
              >
                Add To-Do
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Grid item xs={12}>
        {todos.length === 0 && (
          <Typography
            variant="body1"
            sx={{ color: "#6A5ACD", fontSize: "1.2rem", fontStyle: "italic" }}
          >
            {`You don't have any todos yet. Add one now!`}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
