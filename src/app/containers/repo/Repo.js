import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Error from 'app/components/error';
import Loading from 'app/components/loading';
import {
  fetchRepositoryDetails,
  repositorySelector,
} from 'app/store/repository';

import { getRepoUrlFromQuery } from './helpers';

function Repo() {
  const dispatch = useDispatch();
  const repository = useSelector(repositorySelector);
  const location = useLocation();
  const repoUrl = getRepoUrlFromQuery(location);
  const { data, isFetching, error } = repository;

  useEffect(() => {
    dispatch(fetchRepositoryDetails(repoUrl));
  }, [dispatch, repoUrl]);

  return (
    <div>
      <Link to="/">Back to Home Page</Link>
      <Loading visible={isFetching} />
      <Error visible={Boolean(error)} message={error} />
      {!isFetching && (
        <div>
          <p>Name: {data.full_name}</p>
          <p>Description: {data.description}</p>
          <p>Language: {data.language}</p>
          <p>Is Private: {String(data.private)}</p>
          <p>Created at: {data.created_at}</p>
          <p>Watchers count: {data.watchers_count}</p>
          <p>Forks count: {data.forks_count}</p>
          <p>Open issues count: {data.open_issues_count}</p>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            View on Github
          </a>
        </div>
      )}
    </div>
  );
}

export default Repo;
