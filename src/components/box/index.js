import { getLuminance, transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { color } from 'styled-system';
import flex from '../../utils/flex';
import hovers from '../../utils/hovers';
import shadows from '../../utils/shadows';

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

const handleColorContrast = css`
  /* find the right contrast to a background, based in the luma */
  color: ${(props) => {
    // bg is #e0ffff
    const { bg } = props;

    const luminance = getLuminance(bg);

    if (luminance > 0.5) {
      return 'black !important';
    }

    return 'white !important';
  }};
`;

const BoxContainer = styled.div`
  margin: 1rem;
  padding: 3rem;
  border-radius: 0.25rem;
  ${flex.wrapGap};
  ${flex.column};
  ${shadows.simple} // which one is better?
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  ${color};
  background-color: ${(props) => transparentize(0.45, props.bg || props.theme.primary)};
  backdrop-filter: blur(15px);
  cursor: pointer;
  height: -webkit-fill-available;
  &:hover {
    ${hovers.scaleTransYOpacity}
  }

  /* add contrast to children */
  & > * {
    ${handleColorContrast}
  }
`;

const BoxColumn = styled.div`
  /* a grid like pinterest, where it does not care about the biggest height */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 0.5rem;
  grid-gap: 0.5rem;

  ${BoxContainer} {
    margin: 0.25rem;
  }
`;

export default {
  Group: BoxGroup,
  Wrapper: BoxWrapper,
  Container: BoxContainer,
  Column: BoxColumn
};
