import React, { memo } from "react";
import PropTypes from "prop-types";
const Button = ({ name, onClick, isDisabled }) => {
  return (
    <>
      <button className="btn" disabled={isDisabled} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default memo(Button);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};
