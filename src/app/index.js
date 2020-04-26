import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useTimeZone } from 'app/hooks';

import routes from './routes';

function App() {
  useTimeZone();

  return (
    <Switch>
      {routes.map(({ id, ...route }) => (
        <Route {...route} key={id} />
      ))}
    </Switch>
  );
}

export default App;
