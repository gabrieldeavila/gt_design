/* eslint-disable object-curly-newline */
import React, { memo, useCallback, useRef, useState } from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import Modal from '.';
import Text from '../text';
import GTSwitchThemes from '../switch/gt';
import useOnClickOutside from '../../hooks/helpers/useOnClickOutside';

function GTModal({ show, setShow }) {
  const [open, setOpen] = useState(true);
  const ref = useRef();

  const handleClose = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      setShow(false);
      setOpen(true);
    }, 200);
  }, [setShow]);

  useOnClickOutside(ref, [], () => handleClose());

  // if it's open, hide the scrollbar, but keeps the space
  if (show) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  } else {
    document.body.style.paddingRight = '0px';
    document.body.style.overflow = 'auto';
  }

  if (!show) return null;

  return (
    <Modal.Content open={open}>
      <Modal.Wrapper ref={ref} open={open}>
        <Modal.Container>
          <Modal.Header>
            <Text.H1>Hehehe</Text.H1>
            <Modal.Close onClick={handleClose}>
              <Icon.X />
            </Modal.Close>
          </Modal.Header>

          <Modal.Main>
            <Text.P>hehehe</Text.P>
            <GTSwitchThemes />
          </Modal.Main>
        </Modal.Container>
      </Modal.Wrapper>
    </Modal.Content>
  );
}

export default memo(GTModal);

GTModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
};
