import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bs-font-sans-serif: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body,
  #root {
    overflow-x: hidden;
    height: 100%;
    background-color: #EAEAEA;
  }
`;
