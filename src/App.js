import React, { Component } from "react";

import List from "./components/List";

import "./styles/app.scss";

const sampleTasks = {
  "test-task": {
    id: "test-task",
    title: "task",
    tasks: {
      "test-subtask": {
        id: "test-subtask",
        title: "subtask",
      },
    },
  },
  "test-tasktwo": {
    id: "test-tasktwo",
    title: "another task",
  },
  "test-taskthree": {
    id: "test-taskthree",
    title: "other task",
  },
};

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: sampleTasks,
    };
  }

  render() {
    return (
      <div className="todo">
        <h1>To do:</h1>
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
