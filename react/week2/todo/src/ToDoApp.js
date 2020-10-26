import React from "react";
import Counter from "./Counter";
import ToDoList from "./ToDoList";

const ToDoApp = () => {
  return (
    <div>
      <Counter />
      <ToDoList headertext="Yaser To Do App" />
    </div>
  );
};
export default ToDoApp;
