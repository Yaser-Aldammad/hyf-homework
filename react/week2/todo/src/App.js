import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoApp from "./ToDoFiles/ToDoApp/ToDoApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoApp />
      </header>
    </div>
  );
}

export default App;
