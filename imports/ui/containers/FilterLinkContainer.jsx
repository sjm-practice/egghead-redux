import React, {
  Component,
  PropTypes,
} from "react";
import store from "../../api/stores/store";
import FilterLink from "../components/FilterLink";

class FilterLinkContainer extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = store.getState();

    return (
      <FilterLink
        active={this.props.filter === state.visibilityFilter}
        filterClickHandler={() =>
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: this.props.filter,
          })
        }
      >
        {this.props.children}
      </FilterLink>
    );
  }
}

FilterLinkContainer.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default FilterLinkContainer;
