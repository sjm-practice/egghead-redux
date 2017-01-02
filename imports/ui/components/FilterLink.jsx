import React, {
  PropTypes,
} from "react";
import store from "../../api/stores/store";

const FilterLink = ({ filter, children }) => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        store.dispatch({
          type: "SET_VISIBILITY_FILTER",
          filter,
        });
      }}
    >{children}</a>
  );
};

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
FilterLink.defaultProps = {};

export default FilterLink;
