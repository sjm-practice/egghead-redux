import React, {
  PropTypes,
  Component,
} from "react";
import store from "../../api/stores/store";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import FilterLink from "../components/FilterLink";

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

class TodoAppContainer extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(visibilityFilter, todos);

    return (
      <div>
        <AddTodo
          onAddClick={text =>
            store.dispatch({
              type: "ADD_TODO",
              id: nextTodoId++,
              text,
            })
          }
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            store.dispatch({
              type: "TOGGLE_TODO",
              id,
            })
          }
        />
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

TodoAppContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  visibilityFilter: PropTypes.string.isRequired,
};

export default TodoAppContainer;
