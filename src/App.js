import React, { Component } from "react";

import List from "./components/List";

import sampleTasks from "./utils/sampleTasks";

import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: sampleTasks,
    };
  }

  handleSaveTask = (task) => {
    const { tasks } = this.state;

    this.setState({
      tasks: {
        ...tasks,
        [task.id]: task,
      },
    });
  }

  render() {
    const { tasks } = this.state;

    return (
      <div className="todo">
        <h1>To do:</h1>
        <List saveTask={this.handleSaveTask} tasks={tasks} />
      </div>
    );
  }
}

export default App;
