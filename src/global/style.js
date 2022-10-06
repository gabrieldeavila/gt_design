import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
 
  body {
    font-family: 'Kanit', sans-serif;
  }
`;

export default GlobalStyle;
