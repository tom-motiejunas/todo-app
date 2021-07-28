export const newTodo = (todoText) => {
  return {
    type: "NEWTODO",
    payload: todoText,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETETODO",
    payload: id,
  };
};

export const completeTodo = (id) => {
  return {
    type: "COMPLETETODO",
    payload: id,
  };
};
