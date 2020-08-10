import React, { Component } from "react";
import styled from "styled-components";

import Header from "../header";
import TaskAddForm from "../taskAddForm";
import TodoList from "../todoList";
import SearchTask from "../searchTask";
import TaskFilter from "../taskFilter";

const AppWrap = styled.div`
  max-width: 992px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default class App extends Component {
  state = {
    tasks: [
      { name: "React", id: 1, complite: false },
      { name: "Vue", id: 2, complite: false },
      { name: "VallilaJS", id: 3, complite: false },
    ],
    filter: "active",
    term: "",
  };
  maxid = 4;

  onAddTask = (body) => {
    const newTask = {
      name: body,
      id: ++this.maxid,
      complite: false,
    };
    this.setState(({ tasks }) => {
      const newArr = [...tasks, newTask];
      return {
        tasks: newArr,
      };
    });
  };

  onTaskDelete = (id) => {
    this.setState(({ tasks }) => {
      const index = tasks.findIndex((item) => item.id === id);
      const newArr = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
      return {
        tasks: newArr,
      };
    });
  };

  onTaskComplited = (id) => {
    this.setState(({ tasks }) => {
      const index = tasks.findIndex((item) => item.id === id);
      const old = tasks[index];
      const newItem = { ...old, complite: true };
      const newArr = [
        ...tasks.slice(0, index),
        newItem,
        ...tasks.slice(index + 1),
      ];
      return {
        tasks: newArr,
      };
    });
  };

  filterTasks = (items, filter) => {
    if (filter === "complite") {
      return items.filter((item) => item.complite);
    }
    if (filter === "active") {
      return items.filter((item) => !item.complite);
    } else {
      return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  searchTask(items, value) {
    if (value.length === "") {
      return;
    }
    return items.filter((item) => {
      return item.name.indexOf(value) > -1;
    });
  }
  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { tasks, filter, term } = this.state;

    const allTasks = tasks.length;
    const complitedTasks = tasks.filter((item) => item.complite).length;
    const visibleTasks = this.filterTasks(this.searchTask(tasks, term), filter);

    return (
      <AppWrap>
        <Header all={allTasks} complitedTasks={complitedTasks} />
        <Wrapper>
          <SearchTask searchTask={this.onUpdateSearch} />
          <TaskFilter onFilterSelect={this.onFilterSelect} />
        </Wrapper>
        <TodoList
          tasks={visibleTasks}
          onItemDelete={this.onTaskDelete}
          onItemComplited={this.onTaskComplited}
        />
        <TaskAddForm onAddTask={this.onAddTask} />
      </AppWrap>
    );
  }
}
