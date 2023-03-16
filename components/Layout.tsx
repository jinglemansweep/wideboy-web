
import React, { useCallback, useState, useEffect } from "react";
import { Coordinate, UserCoordinates } from "./interfaces";
import DebugView from "./DebugView";
import Toolbar from "./Toolbar";


const KEY_LEFT = "o";
const KEY_RIGHT = "p";

export default function GameScene() {
  const [coords, setCoords] = useState<UserCoordinates>({});

  /*
  const [channel] = useChannel("game", (message) => {
    console.log("message", message);
    if (message.name === "move") {
      const newCoords = {
        ...coords,
        ...{ [message.clientId]: { x: message.data.x, y: message.data.y } },
      };
      console.log(newCoords);
      setCoords(newCoords);
    }
  });
  */

  /*
  const moveCoords = useCallback(
    (x: number, y: number) => {
      let current: Coordinate;
      if (coords[ably.auth.clientId]) {
        current = coords[ably.auth.clientId];
      } else {
        current = { x: 0, y: 0 };
      }
      let newX = current.x + x;
      let newY = current.y + y;
      if (newX >= 0 && newX < 300) {
        channel.publish("move", {
          x: newX,
          y: newY,
        });
      }
    },
    [coords, ably.auth.clientId, channel]
  );
  */

  /*
  useEffect(() => {
    const handleKeypress = (e: KeyboardEvent) => {
      // console.log("key", e.key);
      if (e.key === KEY_LEFT) {
        moveCoords(-1, 0);
      }
      if (e.key === KEY_RIGHT) {
        moveCoords(1, 0);
      }
    };
    window.addEventListener("keypress", handleKeypress);
    return () => window.removeEventListener("keypress", handleKeypress);
  }, [coords, moveCoords]);
  */

  return (
    <>
      <header className="w3-container w3-purple">
        <h1>WideBoy</h1>
      </header>
      <main>
        <div className="w3-cell-row">
          <div
            className="w3-container w3-light-grey w3-cell"
            style={{ width: "20%" }}
          >
            <nav>
              <h4>Navigation</h4>
              <ul>
                <li>Home</li>
              </ul>
            </nav>
          </div>
          <div className="w3-container w3-cell">
            <h2>Dashboard</h2>
            <Toolbar />
            <DebugView coords={coords} />
          </div>
        </div>
      </main>

      <div></div>

      <footer className="w3-container w3-blue">
        <p>By JingleManSweep</p>
      </footer>
    </>
  );
}
