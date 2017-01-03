import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import AppContainer from "../imports/ui/containers/AppContainer";
import store from "../imports/api/stores/store";

Meteor.startup(() => {
  console.log("Initial store state:", store.getState());

  const action = {
    type: "ADD_TODO",
    id: 50099,
    text: "live todo yo.",
  };

  store.dispatch(action);

  console.log("Test todo added:", store.getState());

  render(<AppContainer />, document.getElementById("render-target"));
});
