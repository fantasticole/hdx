import React, { Component } from "react";

import Form from "./components/Form";
import List from "./components/List";

import "./styles/app.scss";

const sampleTasks = [
  { title: "task" },
  { title: "another task" },
  { title: "other task" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <List tasks={sampleTasks} />
      </div>
    );
  }
}

export default App;
