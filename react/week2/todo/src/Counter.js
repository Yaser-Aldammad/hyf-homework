import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let t;

    t = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      if (t) clearInterval(t);
    };
  }, [count]);

  return (
    <div className="counter"> You have been {count} Sec at this Website</div>
  );
};
export default Counter;
