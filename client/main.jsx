import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { createStore } from "redux";

import todoApp from "../imports/api/reducers/todoApp";
import TodoApp from "../imports/ui/components/TodoApp";

Meteor.startup(() => {
  const store = createStore(todoApp);

  console.log(store.getState());

  const action = {
    type: "ADD_TODO",
    id: 5,
    text: "live todo yo.",
  };

  store.dispatch(action);

  console.log(store.getState());

  const renderApp = () => {
    render(<TodoApp />, document.getElementById("render-target"));
  };
  renderApp();
  store.subscribe(renderApp);

});
