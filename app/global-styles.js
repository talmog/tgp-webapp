import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html,
  body {
    min-height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Libre Franklin', sans-serif;
  }
  
  a {
   text-decoration: none;
   color: #117CB6;
  }
  
  a: hover {
   color: #21A8DD;
  }
  
  .bold700 {
    font-weight: 700;
  }
  
  .bold600 {
    font-weight: 600;
  }
  
  .bold500 {
    font-weight: 500;
  }
  
  .blue {
    color: #117CB6;
  }
  
  .text-right {
    text-align: right;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-left {
    text-align: left;
  }
  
  .pointer {
    cursor: pointer;
  },
  .spacing05 {
    letter-spacing: 0.5px;
  }

  
`;

export default GlobalStyle;
