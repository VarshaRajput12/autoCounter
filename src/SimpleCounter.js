import React, { useState } from "react";

function SimpleCounter() {
  let [timer, setTimer] = useState(0);
  let [timerRef, setTimerRef] = useState(null);
  let startTimer = () => {
    if (timer >= 0) {
      setTimerRef(
        setInterval(() => {
          setTimer(timer++);
        }, 500)
      );
    }
  };
  let stopTimer = () => {
    clearInterval(timerRef);
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{timer}</h1>
          <div className="btn_div">
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SimpleCounter;
