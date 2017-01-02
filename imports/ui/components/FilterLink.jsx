import React, {
  PropTypes,
} from "react";

const FilterLink = ({
  filter,
  currentFilter,
  onClick,
  children,
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick(filter);
      }}
    >{children}</a>
  );
};

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
FilterLink.defaultProps = {};

export default FilterLink;
