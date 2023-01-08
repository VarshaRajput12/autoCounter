import React, { useState } from "react";

const state = {
  PAUSE: "PAUSE",
  PLAY: "PLAY",
};

function Counter() {
  let [timer, setTimer] = useState(0);
  let [timeRef, setTimeRef] = useState(null);
  let [timerState, setTimerState] = useState(state.PAUSE);

  let handleTimerPlay = () => {
    let tempTimer = setInterval(() => {
      setTimer(timer++);
    }, 500);
    setTimeRef(tempTimer);
  };

  let handleTimer = () => {
    if (timerState === state.PAUSE) {
      setTimerState(state.PLAY);
      handleTimerPlay();
    } else {
      setTimerState(state.PAUSE);
      clearInterval(timeRef);
      setTimeRef(null);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{timer}</h1>
          <div className="btn_div">
            <button onClick={handleTimer}>
              {timerState === state.PAUSE ? state.PLAY : state.PAUSE}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
