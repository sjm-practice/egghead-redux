import { Meteor } from "meteor/meteor";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import AppContainer from "../imports/ui/containers/AppContainer";
import store from "../imports/api/stores/store";
import { addTodo } from "../imports/api/actions/actionCreators";

Meteor.startup(() => {
  console.log("Initial store state:", store.getState());

  store.dispatch(addTodo("live todo yo."));

  console.log("Test todo added:", store.getState());

  render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById("render-target")
  );
});
