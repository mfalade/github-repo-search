import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  html {
    font-family: ${({ theme }) => theme.font.family};
    background: ${({ theme }) => theme.color.gray1};
    font-size: ${({ theme }) => theme.font.size.sm};
    color: ${({ theme }) => theme.color.gray2};
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  hr {
    border: none;
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.purple1};
    opacity: 0.1;
  }
`;

export default GlobalStyle;
