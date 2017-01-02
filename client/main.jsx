import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import TodoApp from "../imports/ui/containers/TodoAppContainer";
import store from "../imports/api/stores/store";

Meteor.startup(() => {
  console.log(store.getState());

  const action = {
    type: "ADD_TODO",
    id: 50099,
    text: "live todo yo.",
  };

  store.dispatch(action);

  console.log(store.getState());

  const renderApp = () => {
    render(
      <TodoApp
        todos={store.getState().todos}
        visibilityFilter={store.getState().visibilityFilter}
      />,
      document.getElementById("render-target")
    );
  };
  store.subscribe(renderApp);
  renderApp();
});
