import React from 'react';
import get from 'lodash/get';

import Avatar from 'app/components/avatar';

import {
  RepositoryCardContainer,
  Header,
  ProgrammingLanguage,
  RepoLink,
} from './styles';
import { getSearchValue, truncateDescription } from './helpers';

function RepositoryCard({ repository }) {
  const { language } = repository;
  return (
    <RepositoryCardContainer language={language}>
      <Header>
        <Avatar avatarUrl={get(repository, 'owner.avatar_url')} />
        <div>
          <RepoLink
            to={{ pathname: '/repo', search: getSearchValue(repository) }}
          >
            {repository.full_name}
          </RepoLink>
        </div>
      </Header>
      <hr />
      {language && <ProgrammingLanguage>{language}</ProgrammingLanguage>}
      <p>{truncateDescription(repository.description)}</p>
    </RepositoryCardContainer>
  );
}

export default RepositoryCard;
