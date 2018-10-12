import React, { Component } from "react";

import { taskPropType } from "../utils/propTypes";

import List from "./List";

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      title: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { editing } = this.state;

    const { task } = this.props;

    if (editing) {
      return (
        <div className="task editing">
          <p className="label">Task Name</p>
          <input type="text" name="title"/>
        </div>
      );
    }

    return (
      <div className="task">
        <p className="label">{task.title}</p>
        <div className="subtasks">
          {task.subtasks && <List tasks={task.subtasks} />}
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  task: taskPropType.isRequired,
};

export default Task;
