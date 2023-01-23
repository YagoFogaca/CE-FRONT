import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 10px;
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
    background-color: #ebebeb;
  }
`;
