import { transparentize } from 'polished';
import { css } from 'styled-components';

const basic = css`
  backdrop-filter: blur(0.5rem);
  box-shadow: 0 0 0.5rem 0.1rem ${(props) => transparentize(0.9, props.theme.btnShadow)};
`;

export default {
  basic
};
