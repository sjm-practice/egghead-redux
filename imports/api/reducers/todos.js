function addTodo(state, action) {
  return [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: false,
    },
  ];
}

function toggleTodo(state, action) {
  return state.map((todo) => {
    if (todo.id !== action.id) {
      return todo;
    }

    return {
      id: todo.id,
      text: todo.text,
      completed: !todo.completed,
    };
  });
}

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodo(state, action);

    case "TOGGLE_TODO":
      return toggleTodo(state, action);

    default:
      return state;
  }
};

export default todos;
