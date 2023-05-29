import "./App.css";
import React, { useState, useEffect, useRef } from "react";
function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1; // returns object called current
  }); // seperate from component render cycle, so calling this will update, but it will not update
  // the component, so useeffect wont go into a blitz drive

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My Name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </>
  );
}

export default App;
