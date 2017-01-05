import { PropTypes } from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../api/actions/actionCreators";
import FilterLink from "../components/FilterLink";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  filterClickHandler: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(FilterLink);

FilterLinkContainer.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FilterLinkContainer;
