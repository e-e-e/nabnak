import {atom, RecoilState, selector, SetterOrUpdater, useRecoilState} from "recoil/dist";
import {AsyncValue, isSuccessful, useAsyncApiCall} from "./async";
import {ArenaService} from "../services/arenaService";
import {useCallback, useEffect} from "react";
import {MeApiResponse} from "../services/ArenaApiTypes";

type UseUserState = () => {
  fetch: () => void;
};

export type UserState = {
  useUserState: UseUserState;
};


function meApiResponseToUserData(data: MeApiResponse) {
  return {
    id: data.id,
    name: data.username,
    slug: data.slug,
  }
}
//
// export function installUserState(arena: ArenaService): UserState {
//   const selectedChannel = atom<string | null>({
//     key: 'channel-id',
//     default: null,
//   });
//   const selectedChannel = atom<string | null>({
//     key: 'channel-id',
//     default: null,
//   });
//   const useUserState: UseUserState = () => {
//     const [id, setId] = useRecoilState(selectedChannel);
//     const getChannels = useCallback(async () => {
//       console.log(await arena.me())
//     }, [id]);
//     // const fetch = useAsyncApiCall(getChannels, channelInfo);
//
//     useEffect(() => { fetch() }, [fetch, id]);
//     return {
//       fetch,
//       setId,
//       id,
//     };
//   };
//
//   return {
//     useUserState,
//   };
// }
