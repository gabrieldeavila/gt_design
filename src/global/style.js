import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    color: ${(props) => props.theme.contrast};
  }

  body {
    font-family: 'Kanit', sans-serif;
    background: ${(props) => props.theme.secundary};
  }
`;

export default GlobalStyle;
