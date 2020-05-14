import { lazy } from 'react';

const Home = lazy(() => import('app/containers/home'));
const Repo = lazy(() => import('app/containers/repo'));
const Auth = lazy(() => import('app/containers/auth'));

export default [
  { path: '/', exact: true, component: Home, id: 'home' },
  { path: '/repo', exact: true, component: Repo, id: 'repo' },
  { path: '/auth/:state', exact: true, component: Auth, id: 'auth' },
];
