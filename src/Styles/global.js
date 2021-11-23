import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    text-decoration: none;
  }
  
  body {
    color: ${(props) => props.theme.color.text};
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
`;