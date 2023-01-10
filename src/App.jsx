import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Light from "./component/Light";

let mainTimer;

function App() {
  const [signal, setSignal] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    next: "first",
  });

  const [time, setTime] = useState(1000);
  const [timer, setTimer] = useState(1000);

  const handleChange = (e) => {
    setTime(e.target.value * 1000);
  };

  useEffect(() => {
    // clearTimeout(timeout);
    signalChange();
  }, []);

  var timeout = setTimeout(() => {
    clearTimeout(timeout);
    signalChange();
  }, +timer + 1050);

  const signalChange = () => {
    clearTimeout(timeout);
    console.log("signal change to", signal.next);

    switch (signal.next) {
      case "first":
        clearTimeout(timeout);
        setSignal({
          first: true,
          second: false,
          third: false,
          fourth: false,
          next: "second",
        });
        break;
      case "second":
        clearTimeout(timeout);
        setSignal({
          first: false,
          second: true,
          third: false,
          fourth: false,
          next: "third",
        });
        break;
      case "third":
        clearTimeout(timeout);
        setSignal({
          first: false,
          second: false,
          third: true,
          fourth: false,
          next: "fourth",
        });
        break;
      case "fourth":
        clearTimeout(timeout);
        setSignal({
          first: false,
          second: false,
          third: false,
          fourth: true,
          next: "first",
        });
        break;
      default:
        console.log("default");
        clearTimeout(timeout);
        var timeout1 = setTimeout(() => {
          clearTimeout(timeout);
          signalChange();
        }, +timer + 1050);
        break;
    }
  };

  const handleClick = () => {
    // clearTimeout(timeout);
    setTimer(time);
    setSignal({
      first: false,
      second: false,
      third: false,
      fourth: false,
      next: "default",
    });
    clearTimeout(timeout);
  };

  return (
    <>
      <div className="text">
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>Add</button>
        <button
          onClick={() => {
            setSignal({
              first: false,
              second: false,
              third: false,
              fourth: false,
              next: "first",
            });
            clearTimeout(mainTimer);
            // signalChange();
          }}
        >
          Reset
        </button>
      </div>
      <div className="main">
        <Light isOn={signal.first} time={timer} />
        <Light isOn={signal.second} time={timer} />
        <Light isOn={signal.third} time={timer} />
        <Light isOn={signal.fourth} time={timer} />
      </div>
    </>
  );
}

export default App;
