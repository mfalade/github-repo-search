import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  ul {
    display: flex;
  }

  li {
    cursor: pointer;
    display: inline-block;
    margin: ${({ theme }) => theme.spacing.xxs};
    border: 1px solid ${({ theme }) => theme.color.purple1};
    color: ${({ theme }) => theme.color.purple1};
    border-radius: ${({ theme }) => theme.spacing.xxs};

    &:hover {
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.purple2};
    }

    &.selected {
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.purple1};
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    a {
      padding: 0 ${({ theme }) => theme.spacing.sm};
      outline: none;
    }
  }
`;
