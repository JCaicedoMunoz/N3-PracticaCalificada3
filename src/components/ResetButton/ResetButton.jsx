import React from "react";

const ResetButton = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" id="reset-button" className="reset-button">
      RESET
    </button>
  );
};

export default ResetButton;
