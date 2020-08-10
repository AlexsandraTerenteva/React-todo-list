import React, { Component } from "react";
import TodoListItem from "../todoListItem";

import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export default class TodoList extends Component {
  render() {
    const { tasks, onItemDelete, onItemComplited } = this.props;
    const items = tasks.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id}>
          <TodoListItem
            {...itemProps}
            onItemDelete={() => onItemDelete(id)}
            onItemComplited={() => onItemComplited(id)}
          />
        </li>
      );
    });

    return <List>{items}</List>;
  }
}
