import React from "react";

import "./todo-item.style.css";

import { useSelector, useDispatch } from "react-redux";

import { completeTodo, deleteTodo } from "../../actions/index";

function TodoItem({ text, id }) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todos);
  const item = todo.filter((el) => {
    if (el.id === id) return el;
  });
  //
  return (
    <li className={`item-box ${item[0].completed ? "completed" : null}`}>
      <span className="todo-info">{text}</span>
      <div className="btns-box">
        <button onClick={() => dispatch(completeTodo(id))}>✅</button>
        <button onClick={() => dispatch(deleteTodo(id))}>❌</button>
      </div>
    </li>
  );
}

export default TodoItem;
