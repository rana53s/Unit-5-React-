import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [counter, setCounter] = React.useState(0);

  // const handleIcrement = (value => {
  //   setCounter(counter + value);

  // });
  return (
    <div className="main_div">
      <h1>Counter : <span>{counter}</span></h1>
      
      <div className="btn_div">
        <button className="inc" onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
        <button className="dec" onClick={() => setCounter(counter - 1)}>
          Decrement
        </button>
        <button className="dou" onClick={() => setCounter(counter * 2)}>
          Double
        </button>
      </div>
    </div>
  );
}
