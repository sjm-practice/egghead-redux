import React, {
  PropTypes,
  Component,
} from "react";
import store from "../../api/stores/store";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer";

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
        <Footer
          visibilityFilter={visibilityFilter}
          onFilterClick={filter =>
            store.dispatch({
              type: "SET_VISIBILITY_FILTER",
              filter,
            })
          }
        />
      </div>
    );
  }
}

TodoAppContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  visibilityFilter: PropTypes.string.isRequired,
};

export default TodoAppContainer;
