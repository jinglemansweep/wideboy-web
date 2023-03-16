import React, { useState, useEffect } from 'react';
import { UserCoordinates } from './interfaces';

export default function DebugView({}: Record<string, unknown>) {
  return (
    <div className="w3-container w3-card w3-padding-16">
      <h3>Debugging</h3>
      <div className="w3-code notranslate">
        <pre>{JSON.stringify(1, null, 2)}</pre>
      </div>
    </div>
  );
}
