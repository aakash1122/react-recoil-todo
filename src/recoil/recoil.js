import { atom } from "recoil";

export const inputState = atom({
  key: "inputState",
  default: "",
});

export const todoListState = atom({
  key: "todoListState",
  default: [
    {
      id: Math.random(),
      content: "buy some milk",
      date: new Date().toLocaleTimeString(),
      completed: false,
    },
    { id: Math.random(), content: "buy some eggs", completed: false },
    { id: Math.random(), content: "pay electring bill", completed: false },
  ],
});
  