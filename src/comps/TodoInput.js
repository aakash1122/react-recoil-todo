import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import { inputState, todoListState } from "../recoil/recoil";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "65ch",
    },
  },
  button: {
    margin: theme.spacing(1),
    width: "130px",
  },
}));

const TodoInput = () => {
  const [todo, setTodo] = useRecoilState(inputState);
  //  set state from atom
  const setTodoList = useSetRecoilState(todoListState);
  const classes = useStyles();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: Math.random(),
        content: todo,
        isComplete: false,
        date: new Date().toLocaleTimeString(),
      },
    ]);
    setTodo("");
  };

  return (
    <Box>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={addTodo}
      >
        <TextField
          id="outlined-basic"
          label="Enter A New Todo"
          variant="outlined"
          required
          color="primary"
          onChange={handleChange}
          value={todo}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>
    </Box>
  );
};

export default TodoInput;
