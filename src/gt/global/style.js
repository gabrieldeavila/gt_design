import { transparentize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import transitions from '../../utils/transitions';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    color: ${(props) => props.theme.contrast};
    ${transitions.basic}
  }

  body {
    font-family: 'Kanit', sans-serif;
     background: ${(props) => props.theme.secundary};

  /* width */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.secundary};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.contrast};
    border-radius: 0.25rem;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => transparentize(0.5, props.theme.contrast)};
  } 
    }
`;

export default GlobalStyle;
