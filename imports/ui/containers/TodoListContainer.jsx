import { connect } from "react-redux";
import { toggleTodo } from "../../api/actions/actionCreators";
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

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.visibilityFilter, state.todos),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

// const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export default TodoListContainer;
//     shortened to...
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
