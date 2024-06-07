import React, { useState } from "react";

const TipOptions = ({ values, selectedTip, onChange }) => {
  const [customTip, setCustomTip] = useState("");

  const handleTipChange = (value) => {
    onChange(value);
  };

  const handleCustomTipChange = (e) => {
    const customValue = parseFloat(e.target.value);
    setCustomTip(customValue);
    onChange(customValue);
  };

  return (
    <div>
      <h2>Select Tip %</h2>
      <ul>
        {values.map((value) => (
          <li key={value} id={`percentage-${value}`}>
            <button
              type="button"
              className={`percentage-button ${selectedTip === value && "active"}`}
              onClick={() => handleTipChange(value)}
            >
              {value}%
            </button>
          </li>
        ))}
        <li>
          <input
            type="number"
            placeholder="Custom"
            className="percentage-button"
            value={customTip}
            onChange={handleCustomTipChange}
          />
        </li>
      </ul>
    </div>
  );
};

export default TipOptions;
