import { memo, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useEaseClose from '../hooks/useEaseClose';
import animations from '../utils/animations';
import useOnClickOutside from '../hooks/useOnClickOutside';

const PopupWrapperStyled = styled.div`
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
  display: ${(props) => (props.easeClose ? 'block' : 'none')};
  animation: ${(props) => (props.open ? 'popup 0.2s ease-in-out forwards' : 'popupReverse 0.2s ease-in-out forwards')};

  ${animations.easeOpenClose}
`;

const PopupContainer = styled.div`
  position: relative;
  margin: 1rem;
`;

const PopupWrapper = memo(({
  children, open, setOpen, avoidComponents
}) => {
  const easeClose = useEaseClose(open);
  const ref = useRef(null);

  useOnClickOutside(ref, avoidComponents, () => setOpen(false));

  return (
    <PopupWrapperStyled ref={ref} easeClose={easeClose} open={open}>
      {children}
    </PopupWrapperStyled>
  );
});

export default {
  Wrapper: PopupWrapper,
  Container: PopupContainer
};

PopupWrapper.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  avoidComponents: PropTypes.array,
  children: PropTypes.node.isRequired
};

PopupWrapper.defaultProps = {
  open: false,
  setOpen: () => {},
  avoidComponents: []
};
