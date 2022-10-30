import { transparentize } from 'polished';
import { css } from 'styled-components';

const basic = css`
  backdrop-filter: blur(0.5rem);
  box-shadow: 0 0 0.5rem 0.1rem ${(props) => transparentize(0.9, props.theme.btnShadow)};
`;

const glow = css`
  backdrop-filter: blur(0.5rem);
  box-shadow: 0 0 0.5rem 0.1rem ${(props) => transparentize(0.9, props.theme.glowShadow)};
`;

const simple = css`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export default {
  basic,
  glow,
  simple
};
