import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

function App() {
  return (
    <Switch>
      {routes.map(({ id, ...route }) => (
        <Route {...route} key={id} />
      ))}
    </Switch>
  );
}

export default App;
