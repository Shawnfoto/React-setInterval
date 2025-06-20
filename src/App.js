import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  // button, event => add string for mesg
  // ture=> open message, false close message
  // close method: click or wait 5 sec

  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(5);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let timeId;
    if (message && !pause) {
      timeId = setInterval(() => {
        setCountdown((s) => s - 1);
      }, 1000);
    } else {
      clearInterval(timeId);
    }
    return () => clearInterval(timeId);
  }, [message, pause]);

  useEffect(() => {
    if (countdown <= 0) {
      setMessage("");
      setCountdown(0);
    }
  }, [countdown]);

  const handleMessage = () => {
    setMessage("New Notification");
    setCountdown(5);
  };

  const handlePause = () => {
    setPause(!pause);
  };

  console.log("countdown", countdown);
  return (
    <div className="App">
      <button onClick={() => handleMessage()}>Click</button>
      <button onClick={() => handlePause()}>pause</button>
      {/* modal */}
      <div className={"modal " + (message ? "visible" : "")}>
        <section>{message}</section>
        <div className="close" onClick={() => setMessage("")}>
          X
        </div>
      </div>

      <h1>Self Dismissing Toast</h1>
      <div id="toast-bar">
        Notification bar <span id="count-down"></span>
      </div>
      <div>
        Function like:{" "}
        <a href="https://jossmac.github.io/react-toast-notifications/">
          example
        </a>
        .
        <ol>
          <li>
            Press a button and a message will appear in top right corner of
            screen.
          </li>
          <li>Message shows a string and a countdown.</li>
          <li>At the end of the countdown, the message will dissappear.</li>
        </ol>
      </div>
      <div>
        Function like:{" "}
        <a href="https://jossmac.github.io/react-toast-notifications/">
          example
        </a>
        .
        <ol>
          <li>
            Press a button and a message will appear in top right corner of
            screen.
          </li>
          <li>Message shows a string and a countdown.</li>
          <li>At the end of the countdown, the message will dissappear.</li>
        </ol>
      </div>
      <div>
        Function like:{" "}
        <a href="https://jossmac.github.io/react-toast-notifications/">
          example
        </a>
        .
        <ol>
          <li>
            Press a button and a message will appear in top right corner of
            screen.
          </li>
          <li>Message shows a string and a countdown.</li>
          <li>At the end of the countdown, the message will dissappear.</li>
        </ol>
      </div>
      <div>
        Function like:{" "}
        <a href="https://jossmac.github.io/react-toast-notifications/">
          example
        </a>
        .
        <ol>
          <li>
            Press a button and a message will appear in top right corner of
            screen.
          </li>
          <li>Message shows a string and a countdown.</li>
          <li>At the end of the countdown, the message will dissappear.</li>
        </ol>
      </div>
    </div>
  );
}
