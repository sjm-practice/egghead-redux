import React, {
  PropTypes,
} from "react";

const FilterLink = ({
  active,
  filterClickHandler,
  children,
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        filterClickHandler();
      }}
    >
      {children}
    </a>
  );
};

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  filterClickHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterLink;
