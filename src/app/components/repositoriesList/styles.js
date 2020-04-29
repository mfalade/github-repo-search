import styled from 'styled-components';

export const RepositoriesListContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  .masonry-grid {
    display: flex;
    margin-left: -40px;
    width: auto;
  }

  .masonry-grid__column {
    padding-left: 40px;
    background-clip: padding-box;

    & > article {
      margin-bottom: 40px;
    }
  }
`;
