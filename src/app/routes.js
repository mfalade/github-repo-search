import Home from 'app/containers/home';
import Repo from 'app/containers/repo';
import Auth from 'app/containers/auth';

export default [
  { path: '/', exact: true, component: Home, id: 'home' },
  { path: '/repo', exact: true, component: Repo, id: 'repo' },
  { path: '/auth/:state', exact: true, component: Auth, id: 'auth' },
];
