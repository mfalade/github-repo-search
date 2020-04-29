import styled from 'styled-components';

export const ReadmeContainer = styled.article`
  border: 1px solid ${({ theme }) => theme.color.gray2};
  border-radius: ${({ theme }) => theme.spacing.xxs};
  padding: ${({ theme }) => theme.spacing.xl};

  // Ensure readme contents don't overflow container
  * {
    max-width: 100%;
  }

  // style code blocks
  pre,
  code {
    background: ${({ theme }) => theme.color.purple3};
    border: 1px solid ${({ theme }) => theme.color.purple3};
    padding: ${({ theme }) => theme.spacing.xxs};
    border-radius: ${({ theme }) => theme.spacing.xxs};
  }

  pre {
    padding: ${({ theme }) => theme.spacing.md};
  }

  pre code {
    padding: 0;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.purple1};
  font-size: ${({ theme }) => theme.font.size.lg};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;
