import React, { useCallback, useEffect } from 'react';
import { ArenaService } from '../services/arenaService';
import {
  atom,
  selector,
  RecoilState,
  useRecoilState,
  SetterOrUpdater,
} from 'recoil/dist';
import { AsyncValue, isSuccessful, useAsyncApiCall } from './async';

type UseChannelState = () => {
  fetch: () => void;
  id: string | null;
  setId: SetterOrUpdater<string | null>;
};

export type ChannelState = {
  useChannelState: UseChannelState;
  info: RecoilState<AsyncValue<string>>;
};

export function installChannelState(arena: ArenaService): ChannelState {
  const selectedChannel = atom<string | null>({
    key: 'channel-id',
    default: null,
  });

  const channelInfo = atom<AsyncValue<string>>({
    key: 'channel-info',
    default: { type: 'empty' },
  });

  const resolved = selector({
    key: 'new-key',
    get: ({ get }) => {
      const x = get(channelInfo);
      return x && isSuccessful(x) ? x.value : null;
    },
  });

  const useChannelState: UseChannelState = () => {
    const [id, setId] = useRecoilState(selectedChannel);
    console.log('update id', id);
    const getChannels = useCallback(async () => {
      console.log(await arena.me())
      id && console.log(await arena.channel(id));
      console.log('id', id);
      return 'ok';
    }, [id]);
    const fetch = useAsyncApiCall(getChannels, channelInfo);

    useEffect(() => { fetch() }, [fetch, id]);
    return {
      fetch,
      setId,
      id,
    };
  };

  return {
    useChannelState,
    info: channelInfo,
  };
}
