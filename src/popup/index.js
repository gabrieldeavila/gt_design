import styled from 'styled-components';

const PopupWrapper = styled.div`
  margin-top: 0.5rem;
  position: absolute;
  background: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.contrast};
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  min-width: 15rem;
  min-height: 7rem;
  top: 100%;
  right: 0;
`;

const PopupContainer = styled.div`
  position: relative;
  margin: 1rem;
`;

export default {
  Wrapper: PopupWrapper,
  Container: PopupContainer
};
