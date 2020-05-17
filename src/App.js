import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { RecoilRoot } from "recoil";
// comps
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";

const styles = makeStyles((theme) => ({
  typo: {
    margin: "20px",
    textAlign: "center",
  },
}));

function App() {
  const classes = styles();
  return (
    <div className="App">
      <RecoilRoot>
        <Container maxWidth="sm">
          <CssBaseline>
            <Typography variant="h3" component="h3" className={classes.typo}>
              Todo App
            </Typography>
            <TodoInput />
            <TodoList />
          </CssBaseline>
        </Container>
      </RecoilRoot>
    </div>
  );
}

export default App;
