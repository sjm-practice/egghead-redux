import React from "react";
import { connect } from "react-redux";

let nextTodoId = 0;

// NOTE: this is a small container / presentational component, so just keeping it
// as a mixed presentational component for now. May split it out at a later time.
let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input
        type="text"
        ref={(node) => { input = node; }}
      />
      <button
        onClick={() => {
          dispatch({
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
// connect with no parameters, does not subscribe to store (which is not needed
// in here), but will pass the store dispatch, which you can get by destructuring
//  THIS IS A VERY TERSE USE OF CONNECT
//    -also a little unusual because this is creating a container from its initially
//     defined component
AddTodo = connect()(AddTodo);

export default AddTodo;
