import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

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

  handleSave = () => {
    // TODO: save updates
    this.toggleEdit();
  }

  toggleEdit = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  }

  render() {
    const { editing } = this.state;

    const { task } = this.props;

    if (editing) {
      return (
        <div className="task editing">
          <div className="details">
            <button className="icon" onClick={this.handleSave}>
              <FontAwesome name="save" />
            </button>
            <input
              type="text"
              name="title"
              placeholder="Task title"
              defaultValue={task.title}
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
          {task.tasks && <List tasks={task.tasks} />}
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  task: taskPropType.isRequired,
};

export default Task;
