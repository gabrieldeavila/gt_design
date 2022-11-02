/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components/macro';
import { transparentize } from 'polished';
import animations from '../../utils/animations';
import flex from '../../utils/flex';
import transitions from '../../utils/transitions';
import hovers from '../../utils/hovers';

const ModalContent = styled.div`
  position: fixed;
  z-index: 1101;
  background: ${(props) => transparentize(0.7, props.theme.contrast)};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  ${animations.easeOpacity}
  animation: ${(props) =>
    props.open ? 'opacity 0.2s ease-in-out forwards' : 'opacityReverse 0.2s ease-in-out forwards'};
  ${flex.alignCenter}
`;

const ModalContainer = styled.div`
  margin: 2rem;
`;

const ModalWrapper = styled.div`
  min-width: 35vw;
  ${animations.easeOpenClose}
  animation: ${(props) =>
    props.open ? 'popup 0.2s ease-in-out forwards' : 'popupReverse 0.2s ease-in-out forwards'};
  background: ${(props) => props.theme.primary};
  border-radius: 0.25rem;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  ${flex.justifyBetween}
`;

const ModalClose = styled.div` 
  cursor: pointer;

  ${transitions.linear}
  ${hovers.scaleTransYOpacity}
`;

const ModalMain = styled.main`
  margin: 1.5rem 0;
  padding: 2rem 0;
  border-top: 1px solid ${(props) => transparentize(0.8, props.theme.contrast)};
`;

export default {
  Content: ModalContent,
  Wrapper: ModalWrapper,
  Container: ModalContainer,
  Header: ModalHeader,
  Close: ModalClose,
  Main: ModalMain
};
