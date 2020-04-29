import styled from 'styled-components';

export const ErrorMessage = styled.h3`
  font-size: ${({ theme }) => theme.font.size.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  color: ${({ theme }) => theme.color.red};
`;
