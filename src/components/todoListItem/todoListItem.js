import React, { Component } from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid grey;
  border-radius: 5px;
  color: grey;
`;

const Btn = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 5px;
  transition: all 0.5s ease;
  color: grey;

  :focus,
  :active {
    outline: none;
  }
  :hover {
    background-color: grey;
    color: #fff;
  }
`;

export default class TodoListItem extends Component {
  render() {
    const { name, onItemDelete, onItemComplited } = this.props;
    return (
      <Item>
        <div>{name}</div>
        <div>
          <Btn onClick={onItemDelete}>удалить</Btn>
          <Btn onClick={onItemComplited}>завершить</Btn>
        </div>
      </Item>
    );
  }
}
