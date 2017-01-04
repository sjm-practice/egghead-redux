import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.visibilityFilter, state.todos),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch({
      type: "TOGGLE_TODO",
      id,
    }),
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
