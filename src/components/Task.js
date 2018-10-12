import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

import generateID from "../utils/generateID";
import { taskPropType } from "../utils/propTypes";

import List from "./List";

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: props.task.title.length === 0,
      task: props.task,
    };
  }

  handleAddSubtask = () => {
    // create an empty task
    const newTask = {
      id: generateID(),
      title: "",
    };

    // add it to the state
    this.setState(({ task }) => ({
      task: {
        ...task,
        tasks: {
          ...task.tasks,
          [newTask.id]: newTask,
        }
      }
    }));
  }

  handleChangeTitle = (e) => {
    const { value } = e.target;

    const { task } = this.state;

    this.setState({
      task: {
        ...task,
        title: value,
      }
    })
  }

  handleSaveTitle = () => {
    this.props.saveTask(this.state.task);
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

    const { task } = this.state;

    if (task.title.length === 0 || editing) {
      return (
        <div className="task editing">
          <div className="details">
            <button
              alt="save task"
              className="icon"
              disabled={task.title.length === 0}
              onClick={this.handleSaveTitle}
            >
              <FontAwesome name="save" />
            </button>
            <input
              defaultValue={task.title}
              name="title"
              onChange={this.handleChangeTitle}
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
          <button
            alt="edit task"
            className="icon"
            onClick={this.toggleEdit}>
            <FontAwesome name="edit" />
          </button>
          <button
            alt="add subtask"
            className="icon"
            onClick={this.handleAddSubtask}>
            <FontAwesome name="plus" />
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
