import React, {
  PropTypes,
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

const TodoAppContainer = ({
  todos,
  visibilityFilter,
}) => (
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
      todos={getVisibleTodos(visibilityFilter, todos)}
      onTodoClick={id =>
        store.dispatch({
          type: "TOGGLE_TODO",
          id,
        })
      }
    />
    <Footer />
  </div>
);

TodoAppContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  visibilityFilter: PropTypes.string.isRequired,
};

export default TodoAppContainer;
