import React, {
  PropTypes,
  Component,
} from "react";
import TodoList from "../components/TodoList";

const getVisibleTodos = (filter, todos) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
  }
};

class TodoListContainer extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <TodoList
        todos={getVisibleTodos(state.visibilityFilter, state.todos)}
        onTodoClick={id =>
          store.dispatch({
            type: "TOGGLE_TODO",
            id,
          })
        }
      />
    );
  }
}

TodoListContainer.contextTypes = {
  store: PropTypes.object,
};

export default TodoListContainer;
