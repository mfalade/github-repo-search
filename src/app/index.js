import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { useTimeZone } from 'app/hooks';
import Loading from 'app/components/loading';
import Navbar from 'app/containers/navbar';

import routes from './routes';
import { AppContainer, Main, Footer } from './indexStyles';

function App() {
  useTimeZone();

  return (
    <AppContainer>
      <Navbar />
      <Main>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map(({ id, ...route }) => (
              <Route {...route} key={id} />
            ))}
          </Switch>
        </Suspense>
      </Main>
      <Footer data-cy="footer">Submitted by Mayowa Falade</Footer>
    </AppContainer>
  );
}

export default App;
