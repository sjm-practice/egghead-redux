import React, {
  Component,
} from "react";
import store from "../../api/stores/store";

let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              text: "test",
              id: nextTodoId++,
            });
          }}
        >Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
