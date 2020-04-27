import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Error from 'app/components/error';
import Loading from 'app/components/loading';
import { useTimeZone } from 'app/hooks';
import {
  fetchRepositoryDetails,
  repositorySelector,
} from 'app/store/repository';

import { getRepoUrlFromQuery, getRelativeCreationTime } from './helpers';
import { RepoContainer, Paragraph, Highlight } from './styles';

function Repo() {
  const dispatch = useDispatch();
  const repository = useSelector(repositorySelector);
  const location = useLocation();
  const timeZone = useTimeZone();

  const repoUrl = getRepoUrlFromQuery(location);
  const { data, isFetching, error } = repository;
  const created = getRelativeCreationTime(data.created_at, timeZone);
  const showRepositoryDetails = !error && !isFetching;

  useEffect(() => {
    dispatch(fetchRepositoryDetails(repoUrl));
  }, [dispatch, repoUrl]);

  const renderedItems = [
    { label: 'Name', value: data.full_name },
    { label: 'Description', value: data.description },
    { label: 'Language', value: data.language },
    { label: 'Is Private', value: String(data.private) },
    { label: 'Created', value: created },
    { label: 'Watchers count', value: data.watchers_count },
    { label: 'Forks count', value: data.forks_count },
    { label: 'Open issues count', value: data.open_issues_count },
  ];

  return (
    <RepoContainer>
      <Paragraph>
        <Link to="/">Back to Home Page</Link>
      </Paragraph>
      <br />
      <Loading visible={isFetching} />
      <Error visible={Boolean(error)} message={error} />
      {showRepositoryDetails && (
        <div>
          {renderedItems.map((item) => (
            <Paragraph key={item.label}>
              {item.label}: <Highlight>{item.value}</Highlight>
            </Paragraph>
          ))}
          <br />
          <Paragraph>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              View on Github
            </a>
          </Paragraph>
        </div>
      )}
    </RepoContainer>
  );
}

export default Repo;
