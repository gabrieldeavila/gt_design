import styled from 'styled-components';
import { color } from 'styled-system';

const GTContainer = styled.div`
  ${color}
  background: ${(props) => props.theme.secundary};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default GTContainer;
