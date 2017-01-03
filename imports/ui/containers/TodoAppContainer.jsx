import React, {
  PropTypes,
} from "react";
import store from "../../api/stores/store";
import AddTodo from "../components/AddTodo";
import TodoListContainer from "./TodoListContainer";
import Footer from "../components/Footer";

let nextTodoId = 0;

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
    <TodoListContainer />
    <Footer />
  </div>
);

TodoAppContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  visibilityFilter: PropTypes.string.isRequired,
};

export default TodoAppContainer;
