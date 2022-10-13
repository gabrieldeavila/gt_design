import React from 'react';
import { PropTypes } from 'prop-types';
import Navbar from '.';
import SymbolPopup from '../examples/popup';
import Symbol from '../symbol';

function GTNavbar({ showModal }) {
  // if is showing modal, add padding to the wrapper
  const wrapperStyle = showModal && 14;

  return (
    <Navbar.Wrapper mr={wrapperStyle}>
      <Navbar.Container>
        <Navbar.Left>
          <Navbar.Title>Gt Design</Navbar.Title>
          <Navbar.Options>
            <Navbar.OptionWrapper>
              <Navbar.Option>
                <Navbar.Text>Home</Navbar.Text>
                <Navbar.Popup>
                  <Navbar.Text>Home</Navbar.Text>
                  <Navbar.Text>Home</Navbar.Text>
                  <Navbar.Text>Home</Navbar.Text>
                </Navbar.Popup>
              </Navbar.Option>
            </Navbar.OptionWrapper>
            <Navbar.OptionWrapper>
              <Navbar.Option>
                <Navbar.Text>Projects</Navbar.Text>
              </Navbar.Option>
            </Navbar.OptionWrapper>
            <Navbar.OptionWrapper>
              <Navbar.Option>
                <Navbar.Text>About</Navbar.Text>
              </Navbar.Option>
            </Navbar.OptionWrapper>
          </Navbar.Options>
        </Navbar.Left>

        <Navbar.Right>
          <Navbar.Options>
            <Navbar.OptionWrapper>
              <Symbol.Container>
                <Symbol.Text>G</Symbol.Text>
              </Symbol.Container>
            </Navbar.OptionWrapper>
            <Navbar.OptionWrapper>
              <SymbolPopup />
            </Navbar.OptionWrapper>
          </Navbar.Options>
        </Navbar.Right>
      </Navbar.Container>
    </Navbar.Wrapper>
  );
}

export default GTNavbar;

GTNavbar.propTypes = {
  showModal: PropTypes.bool
};

GTNavbar.defaultProps = {
  showModal: false
};
