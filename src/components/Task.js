import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

import { taskPropType } from "../utils/propTypes";

import List from "./List";

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      title: props.task.title,
    };
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      title: value,
    })
  }

  handleSaveTitle = () => {
    this.props.saveTask({
      ...this.props.task,
      title: this.state.title,
    })
    this.toggleEdit();
  }

  toggleEdit = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  }

  updateSubtasks = (updatedTask) => {
    const { task } = this.props;

    this.props.saveTask({
      ...task,
      tasks: {
        ...task.tasks,
        [updatedTask.id]: updatedTask,
      }
    })
  }

  render() {
    const { editing } = this.state;

    const { task } = this.props;

    if (task.title.length === 0 || editing) {
      return (
        <div className="task editing">
          <div className="details">
            <button
              className="icon"
              disabled={this.state.title.length === 0}
              onClick={this.handleSaveTitle}
            >
              <FontAwesome name="save" />
            </button>
            <input
              defaultValue={task.title}
              name="title"
              onChange={this.handleChange}
              placeholder="Task title"
              type="text"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="task">
        <div className="details">
          <button className="icon" onClick={this.toggleEdit}>
            <FontAwesome name="edit" />
          </button>
          <p className="label">{task.title}</p>
        </div>
        <div className="subtasks">
          {task.tasks && <List saveTask={this.updateSubtasks} tasks={task.tasks} />}
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  saveTask: PropTypes.func.isRequired,
  task: taskPropType.isRequired,
};

export default Task;
