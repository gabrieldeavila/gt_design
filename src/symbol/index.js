import { transparentize } from 'polished';
import styled from 'styled-components';

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
  Container: SymbolContainer,
  Text: SymbolText,
  Image: SymbolImage,
};