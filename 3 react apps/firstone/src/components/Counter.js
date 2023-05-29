import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount((count = 0));
  return (
    <div>
      <div>
        <p>{count}</p>
        <div className="buttons">
          <button onClick={handleIncrement} className="btni">
            Increase
          </button>
          <button onClick={handleDecrement} className="btnd">
            Decrease
          </button>
          <button onClick={handleReset} className="btnr">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
