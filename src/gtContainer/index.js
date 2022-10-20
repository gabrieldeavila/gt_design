import styled from 'styled-components/macro';
import { color } from 'styled-system';

const GTContainer = styled.div`
  ${color}
  background: ${(props) => props.theme.secundary};
`;

export default GTContainer;
