import React from 'react';
import { ArenaClient } from './services/arenaService';
import { Page } from './components/page/page';
import { Channel } from './components/channel/channel';
import { Board } from './components/board/board';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from './views/Home';
import { BoardView } from './views/Board';
import { RecoilRoot } from 'recoil/dist';
import { installChannelState } from './state/state';
import { AuthClient } from './services/authService';

export const installApp = () => {
  // TODO: sort out authentication
  const token = window.localStorage.getItem('token');
  if (!token) {
    const APP_TOKEN = process.env.REACT_APP_ARENA_APP_ID;
    const APP_SECRET = process.env.REACT_APP_ARENA_APP_SECRET;
    const AUTH_REDIRECT = process.env.REACT_APP_ARENA_APP_REDIRECT;
    if (APP_TOKEN && APP_SECRET && AUTH_REDIRECT) {
      const authClient = new AuthClient(APP_TOKEN, APP_SECRET, AUTH_REDIRECT);
      const match = window.location.search.match(/\?code=(\w+)/);
      const code = match && match[1];
      if (!code) {
        authClient.login();
      } else {
        authClient.authorise(code).then(console.log);
      }
      return;
    }
  }

  const arenaClient = new ArenaClient({
    token,
  });

  const channelState = installChannelState(arenaClient);

  const App = () => {
    return (
      <RecoilRoot>
        <Page>
          <Router>
            <Switch>
              <Route path="/:channelId">
                <BoardView state={channelState} />
              </Route>
              <Route path="/">
                <HomeView state={channelState} />
              </Route>
            </Switch>
          </Router>
        </Page>
      </RecoilRoot>
    );
  };
  return App;
};
