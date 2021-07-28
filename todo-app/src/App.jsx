import React from "react";

import "./App.css";

import TodoList from "./components/todo-list/todo-list.component";
import AddTodoItem from "./components/add-todo-item/add-todo-item.component";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodoItem></AddTodoItem>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
