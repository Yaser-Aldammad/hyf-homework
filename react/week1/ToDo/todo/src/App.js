import React from "react";
import logo from "./logo.svg";
import "./App.css";

const DoList = [
  {
    description: "Get out of bed",
    when: "Wed Sep 13 2017",
  },
  {
    description: "Brush teeth",
    when: "Thu Sep 14 2017",
  },
  {
    description: "Eat breakfast",
    when: "Fri Sep 15 2017",
  },
];

const TableHeader = (props) => {
  return (
    <table className="headTable">
      <thead>
        <tr>
          <th>Activity</th>
          <th>Date</th>
        </tr>

        {DoList.map((elme) => {
          return <Activities description={elme.description} when={elme.when} />;
        })}
      </thead>
    </table>
  );
};
const Activities = (props) => {
  return (
    <tr>
      <td key="description">{props.description}</td>
      <td key="when">{props.when}</td>
    </tr>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Do List Application</p>
        <TableHeader />
      </header>
    </div>
  );
}

export default App;
