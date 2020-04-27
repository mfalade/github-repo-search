import styled from 'styled-components';

export const Paragraph = styled.div`
  font-size: ${({ theme }) => theme.font.size.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.color.purple1};
`;

export const RepoContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing.md};
`;
