/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import animations from '../utils/animations';
import flex from '../utils/flex';

const InputWrapper = styled.div`
  ${flex.wrapGap}
  gap: 1.5rem;
`;

const InputContainer = styled.div`
  ${flex.column}
  gap: 0.5rem;
  width: 100%;
  position: relative;

  svg {
    user-select: none;
    cursor: pointer;
    top: 30%;
    transform: scale(0.75);
    right: 0.5rem;
    stroke: ${(props) => props.theme.primary};
    position: absolute;
  }
`;

const Input = styled.input`
  width: -webkit-fill-available;
  height: 2.5rem;
  outline: none;
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  padding-top: 0.5rem;
  border: none;
  background: ${(props) => props.theme.contrast};
  color: ${(props) => props.theme.primary};
  font-family: 'Kanit', sans-serif;
`;

const InputLabel = styled.label`
  user-select: none;
  cursor: text;
  position: absolute;
  font-size: 0.75rem;
  left: 0.5rem;
  color: ${(props) => props.theme.primary};

  ${animations.upLabel}
`;

export default {
  Wrapper: InputWrapper,
  Container: InputContainer,
  Input,
  Label: InputLabel
};
