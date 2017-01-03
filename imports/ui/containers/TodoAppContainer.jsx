import React from "react";
import AddTodo from "../components/AddTodo";
import TodoListContainer from "./TodoListContainer";
import Footer from "../components/Footer";

const TodoAppContainer = () => (
  <div>
    <AddTodo />
    <TodoListContainer />
    <Footer />
  </div>
);

export default TodoAppContainer;
