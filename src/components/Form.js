import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
    return (
      <div className="form">
        <p className="label">Task Name</p>
        <input type="text" name="title"/>
      </div>
    );
  }
}

export default Form;
