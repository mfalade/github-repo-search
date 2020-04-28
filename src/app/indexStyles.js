import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.color.purple1};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
`;

export const Main = styled.main`
  min-height: calc(100vh - 320px)};
  margin: ${({ theme }) => theme.spacing.xl} auto;
  width: 90%;
  max-width: ${({ theme }) => theme.containerWidth};
`;
