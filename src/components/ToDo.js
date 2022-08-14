import React, { Component } from "react";
import "./ToDo.css";

export default class ToDo extends Component {
  state = {
    text: "",
    items: [],
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  storeText = (e) => {
    e.preventDefault();
    const { text } = this.state;
    this.setState({
      items: [...this.state.items, text],
      text: "",
    });
  };

  handleDelete = (value) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== value),
    });
  };

  render() {
    const { text, items } = this.state;

    return (
      <div className="header">
        <form action="submit" onSubmit={this.storeText}>
          <h1>Your ToDo</h1>
          <input
            value={text}
            onChange={this.handleChange}
            type="text"
            placeholder="Enter text here..."
          ></input>
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                onClick={() => this.handleDelete(index)} 
                className="fa-solid fa-trash"
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
