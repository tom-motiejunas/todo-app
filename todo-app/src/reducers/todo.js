const initialState = {
  todos: [],
};

function newID(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWTODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: newID(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case "DELETETODO":
      const todos = [...state.todos];
      const index = todos
        .map((el) => {
          return el.id;
        })
        .indexOf(action.payload);
      todos.splice(index, 1);
      return { todos: [...todos] };
    case "COMPLETETODO":
      const completeTodos = [...state.todos];
      const indexTodo = completeTodos
        .map((el) => {
          return el.id;
        })
        .indexOf(action.payload);
      completeTodos[indexTodo].completed = true;
      return { todos: [...completeTodos] };
    default:
      return state;
  }
};

export default todoReducer;
