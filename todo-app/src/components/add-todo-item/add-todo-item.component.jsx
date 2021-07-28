import React from "react";

import "./add-todo-item.style.css";

import { newTodo } from "../../actions/";
import { useDispatch } from "react-redux";

function addItem(dispatch) {
  const todoText = document.querySelector(".add-text").value;
  dispatch(newTodo(todoText));
}

function AddTodoItem() {
  const dispatch = useDispatch();

  return (
    <div className="add-box">
      <input type="text" name="addItem" className="add-text" />
      <button onClick={() => addItem(dispatch)}>+</button>
    </div>
  );
}

export default AddTodoItem;
