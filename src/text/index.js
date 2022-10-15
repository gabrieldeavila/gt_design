import styled from 'styled-components';
import { space, fontSize } from 'styled-system';

const P = styled.p`
  color: ${(props) => props.theme.contrast};
  font-weight: 300;
  ${space}
  ${fontSize}
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.contrast};
  font-weight: 500;
  font-size: 1.5rem;
  ${space}
  ${fontSize}
`;

export default { P, H1 };
