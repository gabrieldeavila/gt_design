import { opacify } from 'polished';
import styled from 'styled-components/macro';
import { color, space, flexbox } from 'styled-system';
import shadows from '../utils/shadows';
import transitions from '../utils/transitions';

const NavbarWrapper = styled.nav`
  min-height: 3rem;
  position: fixed;
  width: -webkit-fill-available;
  z-index: 1100;
  background: ${(props) => props.theme.primary};
  padding: 0.5rem 1.5rem;
  ${shadows.basic}
  ${color}
  ${space}
  ${flexbox}

  backdrop-filter: blur(10px);
  opacity: 0.9;


  p {
    margin: 0;
  }
`;

const NavbarContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  ${color}
  ${space}
  ${flexbox}
`;
const NavbarOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  ${NavbarOptions} {
    @media (max-width: 768px) {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      background: ${(props) => props.theme.primary};
      padding: 0.5rem;
      justify-content: center;
      z-index: 1004;
    }

  }
`;

const NavbarTitle = styled.h1`
  user-select: none;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${(props) => props.theme.contrast};
`;

const NavbarText = styled.p`
  user-select: none;
  cursor: pointer;
  height: fit-content;
  padding: 1rem;
  ${transitions.basic}
`;

const NavbarPopup = styled.div`
  position: absolute;
  min-width: 15rem;
  background: ${(props) => props.theme.primary};
  border-radius: 0.25rem;
  overflow: hidden;
  margin-top: 0.5rem;
  gap: 0.5rem;
  flex-direction: column;
  transform: translateY(-0.5rem);
  z-index: 10;
  display: none;
  opacity: 0;
  ${shadows.basic}
  ${transitions.basic}

  ${NavbarText}:hover {
    background: ${(props) => opacify(0.1, props.theme.secundary)};
  }
`;

const NavbarOptionWrapper = styled.div`
  position: relative;

  &:hover ${NavbarPopup} {
    transform: translateY(0);
    display: flex; // TO DO: FIX THIS
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.5rem;
  }
`;

const NavbarOption = styled.div`
  border-radius: 0.5rem;
  ${transitions.basic}

  &:hover {
    background: ${(props) => props.theme.secundary};
  }
`;

const NavbarRight = styled.div``;

export default {
  Wrapper: NavbarWrapper,
  Container: NavbarContainer,
  Left: NavbarLeft,
  Title: NavbarTitle,
  Options: NavbarOptions,
  Option: NavbarOption,
  OptionWrapper: NavbarOptionWrapper,
  Text: NavbarText,
  Popup: NavbarPopup,
  Right: NavbarRight
};
