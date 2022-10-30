import styled from 'styled-components/macro';
import flex from '../utils/flex';
import shadows from '../utils/shadows';

const BoxGroup = styled.div`
  ${flex.alignCenter}
  flex-wrap: wrap;
`;

const BoxWrapper = styled.div`
  width: ${(props) => props.width || '100'}%;

  /* when it's mobile, width is 100% */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BoxContainer = styled.div`
  background: ${(props) => props.theme.primary};
  margin: 1rem;
  padding: 3rem;
  border-radius: 0.25rem;
  ${flex.wrapGap};
  ${flex.column};
  ${shadows.simple}
  grid-row-end: span ${(props) => props.span || Math.floor(Math.random() * 10) + 20};
`;

const BoxColumn = styled.div`
  /* a grid like pinterest, where it does not care about the biggest height */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 10px;
  grid-gap: 1rem;
`;

export default {
  Group: BoxGroup,
  Wrapper: BoxWrapper,
  Container: BoxContainer,
  Column: BoxColumn
};
