import "./App.css";
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (
    action.type // takes an 'action' type, in this case increment or decrement strings
  ) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // this is called, calls reducer

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>{" "}
      {/* Call dispatch */}
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default App;
// best for functions that update multiple states
