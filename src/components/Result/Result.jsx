// components/Result/Result.jsx
import React from "react";

const Result = ({ totalTip, totalAmount }) => {
  return (
    <div className="result-wrapper">
      <div className="result-txt">
        <div className="text-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h3>
            $<span id="tip-amount">{totalTip}</span>
          </h3>
        </div>
        <div className="total-amount">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h3>
            $<span id="total">{totalAmount}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Result;
