import React, { PropTypes, Component } from "react";
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

  class Provider extends Component {
    getChildContext() {
      return {
        store: this.props.store,
      };
    }

    render() {
      return this.props.children;
    }
  }
  Provider.propTypes = {
    store: PropTypes.object,  // eslint-disable-line react/forbid-prop-types
    children: PropTypes.node,
  };
  Provider.childContextTypes = {
    store: PropTypes.object,
  };

  render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById("render-target"));
});
