import React from 'react';
import { ChannelState } from '../state/state';
import { Await } from '../state/async';
import { useLocation } from 'react-router-dom';


export function HomeView({ state }: { state: ChannelState }) {
  const { fetch } = state.useChannelState();

  return (
    <div>
      <h1>Hello</h1>
      <p>List of Channels</p>
      <button onClick={fetch}>Press</button>
      <Await forValue={state.info}>
        <div>Gotten!!!</div>
      </Await>
    </div>
  );
}
