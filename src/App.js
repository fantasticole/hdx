import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

import List from "./components/List";

import generateID from "./utils/generateID";
import sampleTasks from "./utils/sampleTasks";

import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: sampleTasks,
    };
  }

  handleNewTask = () => {
    // create an empty task
    const newTask = {
      id: generateID(),
      title: "",
    };

    // add it to the state
    this.setState(({ tasks }) => ({
      tasks: {
        ...tasks,
        [newTask.id]: newTask,
      }
    }));

    // scroll down to it after a short delay
    setTimeout(() => {
      window.scrollTo(0, window.innerHeight);
    }, 300);
  }

  handleSaveTask = (task) => {
    this.setState(({ tasks}) => ({
      tasks: {
        ...tasks,
        [task.id]: task,
      },
    }));
  }

  render() {
    const { tasks } = this.state;

    return (
      <div className="todo">
        <h1>To do:</h1>
        <button
          alt="new task"
          className="icon"
          onClick={this.handleNewTask}
        >
          <FontAwesome name="plus-circle" />
          <p className="label">Add task</p>
        </button>
        <List saveTask={this.handleSaveTask} tasks={tasks} />
      </div>
    );
  }
}

export default App;
