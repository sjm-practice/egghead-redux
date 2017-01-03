import React, {
  Component,
  PropTypes,
} from "react";
import FilterLink from "../components/FilterLink";

class FilterLinkContainer extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
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
  children: PropTypes.node,
};

FilterLinkContainer.contextTypes = {
  store: PropTypes.object,
};


export default FilterLinkContainer;
