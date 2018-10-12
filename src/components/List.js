import React, { Component } from "react";
import PropTypes from "prop-types";

import { taskPropType } from "../utils/propTypes";

import Task from "./Task";

class List extends Component {
  render() {
    const tasks = Object.values(this.props.tasks);

    return (
      <div className="list">
        {tasks.map((task) => (
          <Task task={task} key={task.title}/>
        ))}
      </div>
    );
  }
}

List.propTypes = {
  tasks: PropTypes.shape({
    tasks: PropTypes.objectOf(taskPropType),
  }),
};

List.defaultProps = {
  tasks: "",
};

export default List;
