import styled from 'styled-components';
import { transparentize } from 'polished';
import flex from '../utils/flex';
import animations from '../utils/animations';

const ModalContent = styled.div`
  position: fixed;
  z-index: 1101;
  background: ${(props) => transparentize(0.7, props.theme.contrast)};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  ${animations.easeOpacity}
  animation: ${(props) => (props.open ? 'opacity 0.2s ease-in-out forwards' : 'opacityReverse 0.2s ease-in-out forwards')};
  ${flex.alignCenter}
`;

const ModalContainer = styled.div`
  margin: 2rem;
`;

const ModalWrapper = styled.div`
  min-width: 25vw;
  ${animations.easeOpenClose}
  animation: ${(props) => (props.open ? 'popup 0.2s ease-in-out forwards' : 'popupReverse 0.2s ease-in-out forwards')};
  background: ${(props) => props.theme.primary};
  border-radius: 0.25rem;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  ${flex.justifyBetween}
`;

const ModalTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.contrast};
`;

const ModalClose = styled.div``;

export default {
  Content: ModalContent,
  Wrapper: ModalWrapper,
  Container: ModalContainer,
  Header: ModalHeader,
  Title: ModalTitle,
  Close: ModalClose
};
