// components/App.js
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 1);
  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}

export default App;
