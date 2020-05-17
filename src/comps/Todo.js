import React from "react";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/recoil";

const Todo = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(todoListState);

  const DeleteTodo = (todos, id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const toggleTodo = (todos, id) => {
    const newTodoList = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(newTodoList);
  };

  return (
    <Grid item xs={12}>
      <List>
        <ListItem
          onClick={() => toggleTodo(todos, todo.id)}
          style={{
            background: todo.completed ? "green" : "transparent",
            cursor: "pointer",
          }}
        >
          <ListItemText
            primary={
              <>
                <Typography component="p" style={{ fontSize: 25 }}>
                  {todo.content}
                </Typography>
              </>
            }
            secondary={todo.date}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => DeleteTodo(todos, todo.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Grid>
  );
};

export default Todo;
