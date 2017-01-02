import React, {
  Component,
} from "react";
import store from "../../api/stores/store";
import FilterLink from "./FilterLink";

let nextTodoId = 0;

const getVisibleTodos = (filter, todos) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter((todo) => {
        return !todo.completed;
      });
    case "SHOW_COMPLETED":
      return todos.filter((todo) => {
        return todo.completed;
      });
  }
};

class TodoApp extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={(node) => { this.input = node; }} />
        <button
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              text: this.input.value,
              id: nextTodoId++,
            });
            this.input.value = "";
          }}
        >Add Todo
        </button>
        <ul>
          {getVisibleTodos(store.getState().visibilityFilter, this.props.todos).map(todo =>
            <li
              key={todo.id}
              onClick={() => {
                store.dispatch({
                  type: "TOGGLE_TODO",
                  id: todo.id,
                });
              }}
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show:{" "}
          <FilterLink filter="SHOW_ALL">All</FilterLink>{" "}
          <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{" "}
          <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>{" "}
        </p>
      </div>
    );
  }
}

export default TodoApp;
