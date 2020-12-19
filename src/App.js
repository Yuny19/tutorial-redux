import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/actions";

function App() {
  const counter = useSelector(statem => statem.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {counter}</h1>

      <div>
        <button onClick={() => dispatch(increment(2))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default App;
