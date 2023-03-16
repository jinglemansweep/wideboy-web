import React, { useCallback, useState, useEffect } from 'react';
import { Coordinate, UserCoordinates } from './interfaces';
import DebugView from './DebugView';
import Toolbar from './Toolbar';

const KEY_LEFT = 'o';
const KEY_RIGHT = 'p';

type Props = {
  device: string;
};

export default function GameScene({ device }: Props) {
  return (
    <>
      <header className="w3-container w3-purple">
        <h1>WideBoy {device && `(${device})`}</h1>
      </header>
      <main>
        <div className="w3-cell-row">
          <div
            className="w3-container w3-light-grey w3-cell"
            style={{ width: '20%' }}
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
            {device ? (
              <>
                <Toolbar />
                <DebugView />
              </>
            ) : (
              <p>No device specified!</p>
            )}
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
