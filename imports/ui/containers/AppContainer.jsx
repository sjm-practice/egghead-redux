import React, { Component } from "react";
import { createStore } from "redux";
import todoApp from "../../api/reducers/todoApp";

const store = createStore(todoApp);

console.log(store.getState());

export default class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <h1>Here we go!</h1>
      </div>
    );
  }
}
