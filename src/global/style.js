import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
 
  body {
    font-family: 'Inter', sans-serif;
    background: ${(props) => props.theme.primary};
  }
`;

export default GlobalStyle;
