import React, { Component } from "react";
import PropTypes from "prop-types";

import { taskPropType } from "../utils/propTypes";

class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.tasks.map(({ title }) => (
          <div className="task" key={title}>
            <p className="title">{title}</p>
          </div>
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
