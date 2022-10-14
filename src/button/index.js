import styled, { css } from 'styled-components';
import { flexbox, space } from 'styled-system';
import flex from '../utils/flex';
import shadows from '../utils/shadows';
import transitions from '../utils/transitions';

const resetBtn = css`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  font-family: 'Kanit', sans-serif;
  width: fit-content;
  padding: 1rem;
  border-radius: 0.25rem;

  ${transitions.linear}

  &:hover {
    transform: scale(1.05) translateY(-0.25rem);
    opacity: 0.8;
  }
`;

const ButtonWrapper = styled.div`
  ${flex.wrapGap};
  ${flexbox}
`;

const ButtonNormal = styled.button`
  ${resetBtn};
  background: ${(props) => props.theme.contrast};
  color: ${(props) => props.theme.primary};
`;

const ButtonContrast = styled.button`
  ${resetBtn};
  ${shadows.basic}
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.contrast};

  ${space};
`;

export default {
  Wrapper: ButtonWrapper,
  Normal: ButtonNormal,
  Contrast: ButtonContrast
};
