import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

// combine reducer written by hand... (note a lot of es6 shorthand)
// const todoApp = (state = {}, action) => ({
//   todos: todos(state.todos, action),
//   visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// });

// using provided function...
const todoApp = combineReducers({ todos, visibilityFilter });

// NOTE: a useful convention is to name the reducers after the state key they manage
//       ie, todos, visibilityFilter, allowing you to use es6 object literal
//       shorthand notation above

export default todoApp;
