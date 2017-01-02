import React, {
  PropTypes,
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
      return todos.filter(todo => !todo.completed);
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
  }
};

class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(visibilityFilter, todos);

    return (
      <div>
        <input type="text" ref={(node) => {
          this.input = node;
        }} />
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
          {visibleTodos.map(todo =>
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
          <FilterLink
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
          >
            All
          </FilterLink>{" "}
          <FilterLink
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
          >
            Active
          </FilterLink>{" "}
          <FilterLink
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>{" "}
        </p>
      </div>
    );
  }
}

TodoApp.propTypes = {
  todos: PropTypes.array.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
};

export default TodoApp;
