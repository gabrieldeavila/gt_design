import { css } from 'styled-components';

const easeOpenClose = css`
  @keyframes popup {
    0% {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes popupReverse {
    0% {
      opacity: 1;

      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
  }
`;

export default {
  easeOpenClose
};
