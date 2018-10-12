import React, { Component } from "react";
import PropTypes from "prop-types";

import { taskPropType } from "../utils/propTypes";

import Task from "./Task";

class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.tasks.map((task) => (
          <Task task={task} key={task.title}/>
        ))}
      </div>
    );
  }
}

List.propTypes = {
  tasks: PropTypes.arrayOf(taskPropType),
};

List.defaultProps = {
  tasks: "",
};

export default List;
