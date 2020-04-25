import Home from 'app/containers/home';
import Repo from 'app/containers/repo';

export default [
  { path: '/', exact: true, component: Home, id: 'home' },
  { path: '/repo', exact: true, component: Repo, id: 'repo' },
];
