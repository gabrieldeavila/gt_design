import styled from 'styled-components';
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
  ${shadows.basic}
`;

export default {
  Group: BoxGroup,
  Wrapper: BoxWrapper,
  Container: BoxContainer
};
