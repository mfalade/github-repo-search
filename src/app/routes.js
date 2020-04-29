import Home from 'app/containers/home';
import Repo from 'app/containers/repo';
import Oauth from 'app/containers/oauth';

export default [
  { path: '/', exact: true, component: Home, id: 'home' },
  { path: '/repo', exact: true, component: Repo, id: 'repo' },
  { path: '/oauth', exact: true, component: Oauth, id: 'oauth' },
];
