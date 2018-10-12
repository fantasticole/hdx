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

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // save work
      this.handleSaveTitle();
    }
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
    const { task } = this.state;

    const editing = task.title.length === 0 || this.state.editing;

    return (
      <div className="task">
        <div className="details">
          {editing ? ([
            <button
              alt="save task"
              className="icon"
              disabled={task.title.length === 0}
              key="save"
              onClick={this.handleSaveTitle}
            >
              <FontAwesome name="save" />
            </button>,
            <input
              autoFocus
              defaultValue={task.title}
              key="input"
              name="title"
              onChange={this.handleChangeTitle}
              onKeyPress={this.handleKeyPress}
              placeholder="Task title"
              type="text"
            />
          ]) : ([
            <button
              alt="edit task"
              className="icon"
              key="edit"
              onClick={this.toggleEdit}>
              <FontAwesome name="edit" />
            </button>,
            <button
              alt="add subtask"
              className="icon"
              key="add"
              onClick={this.handleAddSubtask}>
              <FontAwesome name="plus" />
            </button>,
            <p key="label" className="label">{task.title}</p>
          ])}
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
