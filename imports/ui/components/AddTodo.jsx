import React from "react";
import store from "../../api/stores/store";

let nextTodoId = 0;

// NOTE: this is a small container / presentational component, so just keeping it
// as a mixed presentational component for now. May split it out at a later time.
const AddTodo = () => {
  let input;

  return (
    <div>
      <input
        type="text"
        ref={(node) => { input = node; }}
      />
      <button
        onClick={() => {
          store.dispatch({
            type: "ADD_TODO",
            id: nextTodoId++,
            text: input.value,
          });
          input.value = "";
          input.focus();
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
