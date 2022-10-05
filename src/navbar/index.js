import { transparentize } from 'polished';
import styled from 'styled-components/macro';
import { color, space, flexbox } from 'styled-system';

const NavbarWrapper = styled.nav`
  min-height: 3rem;
  position: relative;
  background: ${(props) => props.theme.secundary};
  border: 1px solid ${(props) => transparentize(0.7, props.theme.contrast)};
  ${color}
  ${space}
  ${flexbox}

  p {
    margin: 0;
  }
`;

const NavbarContent = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  ${color}
  ${space}
  ${flexbox}
`;

export default {
  Wrapper: NavbarWrapper,
  Content: NavbarContent
};
