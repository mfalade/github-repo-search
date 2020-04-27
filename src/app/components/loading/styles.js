import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.color.purple1};
`;
