import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import List from "./components/List";

import sampleTasks from "./utils/sampleTasks";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders a List", () => {
  const defaultProps = {
    saveTask: () => {},
    tasks: sampleTasks,
  };
  const div = document.createElement("div");
  ReactDOM.render(<List {...defaultProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders a Task", () => {
  const defaultProps = {
    saveTask: () => {},
    task: sampleTasks["test-tasktwo"],
  };
  const div = document.createElement("div");
  ReactDOM.render(<List {...defaultProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders a Task with a subtask", () => {
  const defaultProps = {
    saveTask: () => {},
    task: sampleTasks["test-task"],
  };
  const div = document.createElement("div");
  ReactDOM.render(<List {...defaultProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
