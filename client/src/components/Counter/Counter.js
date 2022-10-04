import React, { useState } from "react";
import "./Counter.css";

const Counter = ({intialcount}) => {
  const [count, setCount] = useState(intialcount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
        <h1>Counter app</h1>
        <p data-testid="counter-details">Counter details action</p>
      <h1 data-testid="count">{count}</h1>

      <div>
        <button className="btn-design" onClick={increment}>
          Increment
        </button>
        <button className="btn-design" onClick={decrement}>
          Decrement
        </button>
        <button className="btn-design" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
