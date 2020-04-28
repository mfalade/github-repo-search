import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useTimeZone } from 'app/hooks';
import LoginButton from 'app/components/loginButton';

import routes from './routes';
import { AppContainer, Header, Main, Footer } from './indexStyles';

function App() {
  useTimeZone();

  return (
    <AppContainer>
      <Header>
        <h2>Repo Search</h2>
        <LoginButton />
      </Header>

      <Main>
        <Switch>
          {routes.map(({ id, ...route }) => (
            <Route {...route} key={id} />
          ))}
        </Switch>
      </Main>

      <Footer>Submitted by Mayowa Falade</Footer>
    </AppContainer>
  );
}

export default App;
