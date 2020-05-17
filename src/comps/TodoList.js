import React from "react";
import Grid from "@material-ui/core/Grid";
import Todo from "./Todo";
import { todoListState } from "../recoil/recoil";
import { useRecoilValue } from "recoil";

const TodoList = () => {
  const todos = useRecoilValue(todoListState);
  return (
    <Grid container spacing={2}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </Grid>
  );
};

export default TodoList;
