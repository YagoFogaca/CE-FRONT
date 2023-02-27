import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bs-font-sans-serif: 'Open Sans',sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body,
  #root {
    overflow-x: hidden;
    background-color: #EAEAEA;
  }
`;
