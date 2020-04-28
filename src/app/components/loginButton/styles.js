import styled from 'styled-components';

export const LoginButtonComponent = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.purple1};
  border: 1px solid ${({ theme }) => theme.color.purple1};
  border-radius: ${({ theme }) => theme.spacing.xxs};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-family: ${({ theme }) => theme.font.family};
`;
