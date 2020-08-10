import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  input {
    width: 78%;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 5px;
    :focus,
    :active {
      outline: none;
    }
  }
  button {
    width: 19%;
    padding: 10px;
    background-color: #fff;
    border: 1px solid grey;
    border-radius: 5px;
    color: grey;
    transition: all 0.5s ease;
    :focus,
    :active {
      outline: none;
    }
    :hover {
      background-color: grey;
      color: #fff;
    }
  }
`;

export default class TaskAddForm extends Component {
  state = {
    text: "",
  };

  onValueChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      return;
    }
    this.props.onAddTask(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <button type="submit">Добавить</button>
        <input
          type="text"
          placeholder="Введите новую задачу"
          onChange={this.onValueChange}
          value={this.state.text}
        />
      </Form>
    );
  }
}
