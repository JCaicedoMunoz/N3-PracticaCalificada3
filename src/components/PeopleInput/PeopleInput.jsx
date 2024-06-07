
import React from "react";

const PeopleInput = ({ value, onChange }) => {
  return (
    <div>
      <h2>Number of People</h2>
      <label htmlFor="input-people">
        <input
          onChange={(e) => onChange(parseInt(e.target.value))}
          id="input-people"
          className="input-people"
          type="number"
          value={value || 1}
          min="1"
        />
      </label>
    </div>
  );
};

export default PeopleInput;
