import React from 'react';
import get from 'lodash/get';

import Avatar from 'app/components/avatar';

import {
  RepositoryCardContainer,
  Header,
  ProgrammingLanguage,
  RepoLink,
  AvatarContainer,
  Description,
} from './styles';
import { getSearchValue, truncateDescription } from './helpers';

function RepositoryCard({ repository }) {
  const { language } = repository;
  return (
    <RepositoryCardContainer language={language} data-cy="search-item">
      <Header>
        <AvatarContainer>
          <Avatar avatarUrl={get(repository, 'owner.avatar_url')} />
        </AvatarContainer>
        <p>{get(repository, 'owner.login')}</p>
      </Header>
      <div>
        <RepoLink
          data-cy="repository-link"
          to={{ pathname: '/repo', search: getSearchValue(repository) }}
        >
          {repository.full_name}
        </RepoLink>
      </div>
      <hr />
      <Description>{truncateDescription(repository.description)}</Description>
      {language && <ProgrammingLanguage>{language}</ProgrammingLanguage>}
    </RepositoryCardContainer>
  );
}

export default RepositoryCard;
