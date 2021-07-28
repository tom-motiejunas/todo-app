import React from "react";

import "./todo-item.style.css";

import { useSelector, useDispatch } from "react-redux";

import { completeTodo, deleteTodo } from "../../actions/index";

function TodoItem({ text, id }) {
  const dispatch = useDispatch();
  return (
    <li className="item-box">
      <span className="todo-info">{text}</span>
      <div className="btns-box">
        <button onClick={() => dispatch(completeTodo(id))}>✅</button>
        <button onClick={() => dispatch(deleteTodo(id))}>❌</button>
      </div>
    </li>
  );
}

export default TodoItem;
