import { transparentize } from 'polished';
import styled from 'styled-components/macro';

const SymbolWrapper = styled.div`
  position: relative;
`;

const SymbolContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  background: ${(props) => transparentize(0.08, props.theme.contrast)};
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  cursor: pointer;
  user-select: none;
  position: relative;

  &:hover {
    opacity: 0.5 ;
  }

  /* add background red on child */
  > *, svg {
    color: ${(props) => props.theme.primary} !important;
    stroke: ${(props) => props.theme.primary} !important;
  }
`;

const SymbolText = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.primary};
`;

const SymbolImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default {
  Wrapper: SymbolWrapper,
  Container: SymbolContainer,
  Text: SymbolText,
  Image: SymbolImage
};
