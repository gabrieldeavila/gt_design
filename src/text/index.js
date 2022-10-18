import styled, { css } from 'styled-components';
import { space, fontSize } from 'styled-system';

const P = styled.p`
  color: ${(props) => props.theme.contrast};
  font-weight: 300;

  text-align: justify;
  ${(props) => props.sm && css`
    font-size: 0.75rem;
  `}  

  ${space}
  ${fontSize}
`;

const h1Css = css`
  font-weight: 500;
  font-size: 1.5rem;
  ${space}
  ${fontSize}
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.contrast};
  ${h1Css}
`;

const H1Contrast = styled.h1`
  color: ${(props) => props.theme.primary};
  ${h1Css}
`;

export default { P, H1, H1Contrast };
