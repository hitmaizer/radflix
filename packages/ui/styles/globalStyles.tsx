import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    height: 100%;
    /* Adjust font size */
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'kern' on, 'liga' on, 'calt' on, 'zero' on,
      contextual common-ligatures, 'kern', contextual common-ligatures, 'kern';
    -webkit-font-feature-settings: 'kern' on, 'liga' on, 'calt' on, 'zero' on;
    font-variant-ligatures: contextual common-ligatures;
    -webkit-font-kerning: normal;
    font-kerning: normal;
  }
  
  * {
    box-sizing: border-box;
  }
  
  @supports (font-variation-settings: normal) {
    html {
      font-family: "Roboto", sans-serif;
    }
  }
  
  a,
  button {
      cursor: pointer;
      border: none;
  }
  
  a {
      text-decoration: none;   
  }
  
  a,
      a:visited,
      a:hover,
      a:active {
        color: inherit;
      }

  body {
    overflow-x: hidden;
  }
  
`;

export default GlobalStyle;
