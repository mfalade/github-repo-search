import React from 'react';
import { useLocation } from 'react-router-dom';

import { getRepoUrlFromQuery } from './helpers';

function Repo() {
  const location = useLocation();
  const repoUrl = getRepoUrlFromQuery(location);
  console.log(repoUrl);
  return <div>{`Cool page for ${repoUrl}`}</div>;
}

export default Repo;
