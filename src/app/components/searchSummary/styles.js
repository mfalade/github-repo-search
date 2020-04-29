import styled from 'styled-components';

export const Text = styled.h2`
  font-size: ${({ theme }) => theme.font.size.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.color.purple1};
`;
