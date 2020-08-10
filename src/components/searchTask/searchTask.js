import React, { Component } from "react";
import styled from "styled-components";

const InputWrap = styled.div`
  width: 57%;
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 5px;
    :focus,
    :active {
      outline: none;
    }
  }
`;

export default class SearchTask extends Component {
  state = {
    term: "",
  };

  searchTask = (e) => {
    this.setState({
      term: e.target.value,
    });
    this.props.searchTask(this.state.term);
    console.log(this.state.term);
  };

  render() {
    return (
      <InputWrap>
        <input
          type="text"
          placeholder="Введите название задачи"
          onChange={this.searchTask}
          value={this.state.term}
        />
      </InputWrap>
    );
  }
}
