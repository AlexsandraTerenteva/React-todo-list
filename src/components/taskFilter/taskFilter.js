import React, { Component } from "react";
import styled from "styled-components";

const Btns = styled.div`
  width: 40%;
  button {
    width: 33%;
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

export default class TaskFilter extends Component {
  buttons = [
    { name: "active", label: "Активные" },
    { name: "complite", label: "Завершенные" },
    { name: "all", label: "Все" },
  ];

  render() {
    const filters = this.buttons.map(({ name, label }) => {
      const { onFilterSelect } = this.props;

      return (
        <button type="button" key={name} onClick={() => onFilterSelect(name)}>
          {label}
        </button>
      );
    });

    return <Btns>{filters}</Btns>;
  }
}
