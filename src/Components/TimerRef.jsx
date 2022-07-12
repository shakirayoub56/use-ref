const { useRef, useEffect, useState } = require("react");

function Example() {
  const [timer, setTimer] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
  }, []);

  const startTimer = () => {
    // exit timer function if ref.current exists
    if (ref.current) return;
    ref.current = setInterval(() => {
      // do something
      setTimer((time) => time + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(ref.current);
    // reset ref.curren to null
    ref.current = null;
  };
  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>PAUSE</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default Example;
