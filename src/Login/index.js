import { transparentize } from 'polished';
import styled from 'styled-components';
import flex from '../utils/flex';
import shadows from '../utils/shadows';

const LoginWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  ${flex.column}
`;

const LoginBoxContrast = styled.div`
  background: ${(props) => props.theme.loginBoxContrast};
  position: absolute;
  top: 0;
  bottom: 50%;
  left: 0;
  right: 0;
`;

const LoginTitle = styled.h1`
  color: ${(props) => props.theme.primary};
  position: absolute;
  top: 25%;
  left: 3rem;
  right: 60%;
  font-size: 2rem;
  line-height: 2.5rem;
`;

const LoginBoxPrimary = styled.div`
  background: ${(props) => props.theme.loginBoxPrimary};
  position: absolute;
  top: 50%;
  bottom: 0%;
  left: 0;
  right: 0;
`;

const LoginBoxMain = styled.main`
  position: absolute;
  top: 25%;
  bottom: 25%;
  left: 60%;
  width: 25vw;
  background: ${(props) => transparentize(0.4, props.theme.primary)};
  backdrop-filter: blur(1rem);
  border-radius: 0.25rem;
  ${shadows.basic}
  ${flex.alignCenter}
`;

const LoginBoxWrapper = styled.main`
  /* background: red; */
  height: 100%;
  padding: 3rem;
  ${flex.column}
  ${flex.alignCenter}
  justify-content: space-evenly;
`;

const LoginInputWrapper = styled.div`
  ${flex.wrapGap}
  gap: 1.5rem;
`;

const LoginInputContainer = styled.div`
  ${flex.column}
  gap: 0.5rem;
  width: 100%;
  position: relative;

  svg {
    top: 16%;
    transform: scale(0.75);
    right: 0.5rem;
    stroke: ${(props) => props.theme.primary};
    position: absolute;
  }
`;

const LoginInput = styled.input`
  width: -webkit-fill-available;
  height: 2rem;
  outline: none;
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  border: none;
  background: ${(props) => props.theme.contrast};
  color: ${(props) => props.theme.primary};
`;

const LoginLabel = styled.label`
  user-select: none;
  cursor: text;
  position: absolute;
  font-size: 0.75rem;
  top: 30%;
  left: 0.5rem;
  color: ${(props) => props.theme.primary};
`;

export default {
  BoxContrast: LoginBoxContrast,
  BoxPrimary: LoginBoxPrimary,
  BoxMain: LoginBoxMain,
  BoxWrapper: LoginBoxWrapper,
  InputWrapper: LoginInputWrapper,
  InputContainer: LoginInputContainer,
  Label: LoginLabel,
  Input: LoginInput,
  Wrapper: LoginWrapper,
  Title: LoginTitle
};
