import React, { Component } from "react";

import List from "./components/List";

import "./styles/app.scss";

const sampleTasks = [
  {
    title: "task",
    subtasks: [
      {
        title: "subtask",
      },
    ],
  },
  { title: "another task" },
  { title: "other task" },
];

class App extends Component {
  render() {
    return (
      <div className="todo">
        <h1>To do:</h1>
        <List tasks={sampleTasks} />
      </div>
    );
  }
}

export default App;
