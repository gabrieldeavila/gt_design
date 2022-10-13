import { css } from 'styled-components';

const alignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const justifyBetween = css`
  display: flex;
  justify-content: space-between;
`;

const wrapGap = css`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

const column = css`
  display: flex;  
  flex-direction: column;
`;

export default {
  alignCenter,
  justifyBetween,
  wrapGap,
  column
};
