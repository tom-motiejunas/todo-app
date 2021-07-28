import React from "react";

import "./todo-list.style.css";

import TodoItem from "../todo-item/todo-item.component";

import { useSelector } from "react-redux";

function TodoList() {
  const todo = useSelector((state) => state.todo);
  return (
    <main className="list-box">
      <h2>Your Todo list 🌠</h2>
      <ul className="todo-list-box">
        {todo
          ? todo.todos.map((el) => (
              <TodoItem text={el.text} key={el.id} id={el.id}></TodoItem>
            ))
          : null}
      </ul>
    </main>
  );
}

export default TodoList;
