import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { useTimeZone } from 'app/hooks';
import LoginButton from 'app/components/loginButton';

import routes from './routes';
import { AppContainer, Header, Main, Footer } from './indexStyles';

function App() {
  useTimeZone();

  return (
    <AppContainer>
      <Header>
        <Link to="/">Repo Search</Link>
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
