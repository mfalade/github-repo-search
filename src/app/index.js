import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useTimeZone } from 'app/hooks';
import Navbar from 'app/containers/navbar';

import routes from './routes';
import { AppContainer, Main, Footer } from './indexStyles';

function App() {
  useTimeZone();

  return (
    <AppContainer>
      <Navbar />

      <Main>
        <Switch>
          {routes.map(({ id, ...route }) => (
            <Route {...route} key={id} />
          ))}
        </Switch>
      </Main>

      <Footer data-cy="footer">Submitted by Mayowa Falade</Footer>
    </AppContainer>
  );
}

export default App;
