import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Board } from '../components/board/board';
import {ChannelState} from "../state/state";
import {Await} from "../state/async";

export function BoardView({ state }: { state: ChannelState }) {
  const { channelId } = useParams();
  const { fetch, setId } = state.useChannelState();

  useEffect(() => {
    console.log('channelId', channelId)
    setId(channelId);
  }, [channelId])
  return <Await forValue={state.info}><Board/></Await>;
}
