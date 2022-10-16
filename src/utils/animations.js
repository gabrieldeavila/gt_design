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

const easeOpacity = css`
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes opacityReverse {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const easeShow = css`
  @keyframes show {
    0% {
      opacity: 0;
      transform: translateY(-5rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes showReverse {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-5rem);
    }
  }
`;

export default {
  easeOpenClose,
  easeOpacity,
  easeShow
};
