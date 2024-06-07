// components/Bill/Bill.jsx
import React from "react";

const Bill = ({ value, onChange }) => {
  return (
    <div>
      <h1>Bill</h1>
      <label htmlFor="input-bill">
        <input
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="input-bill"
          id="input-bill"
          type="number"
          value={value || 0}
          min="0"
        />
      </label>
    </div>
  );
};

export default Bill;
