import styled from 'styled-components/macro';
import { color, space, flexbox } from 'styled-system';

const NavbarWrapper = styled.nav`
  min-height: 3rem;
  position: relative;
  background: ${(props) => props.theme.primary};
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  padding: 1rem 1.5rem;
  ${color}
  ${space}
  ${flexbox}

  p {
    margin: 0;
  }
`;

const NavbarContent = styled.div`
  padding: 1.5rem;
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

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const NavbarTitle = styled.h1`
  user-select: none;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${(props) => props.theme.contrast};
`;

const NavbarOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavbarPopup = styled.div`
  position: absolute;
  min-width: 15rem ;
  background: ${(props) => props.theme.secundary};
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: none;
`;

const NavbarOption = styled.div`
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.secundary};
  }

  &:hover ${NavbarPopup} {
    display: block;
  }
`;

const NavbarText = styled.p`
  user-select: none;
  cursor: pointer;
  padding: 1rem;
`;

export default {
  Wrapper: NavbarWrapper,
  Content: NavbarContent,
  Left: NavbarLeft,
  Title: NavbarTitle,
  Options: NavbarOptions,
  Option: NavbarOption,
  Text: NavbarText,
  Popup: NavbarPopup
};
