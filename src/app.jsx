import React, { useState } from 'react';
import Box from './box';
import Button from './button';
import Content from './Content';
import GtProvider from './context/gt';
import LoaderEx from './examples/loader';
import GlobalStyle from './global/style';
import GtDesign from './gtDesign';
import GTModal from './modal/gt';
import GTNavbar from './navbar/gt';

const darkThemeStyle = {
  primary: '#080808',
  secundary: '#242124',
  contrast: '#fffafa',
  backgroundHover: '#696969',
  backgroundMobileNav: '#555d50',
  sunColor: '#daa520',
  moonColor: '#191970',
  btnShadow: '#ffff'
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('darkTheme') === '1');

  return (
    <GtProvider darkTheme={darkTheme} setDarkTheme={setDarkTheme}>
      <GtDesign theme={darkTheme && darkThemeStyle}>
        <GTNavbar showModal={showModal} />
        <Content.Wrapper>
          <Content.Container>
            <Box.Group>
              {[1, 2, 3, 4].map(() => (
                <Box.Wrapper width="50">
                  <Box.Container>
                    oie
                    <LoaderEx />
                    <LoaderEx />
                    <LoaderEx />
                    <LoaderEx />
                    <Button.Wrapper justifyContent="center">
                      <Button.Normal type="submit" onClick={() => setShowModal(true)}>
                        Clique p/ abrir modal
                      </Button.Normal>
                      <Button.Contrast type="submit" onClick={() => setShowModal(true)}>
                        Clique p/ abrir modal
                      </Button.Contrast>
                    </Button.Wrapper>
                    último
                  </Box.Container>
                </Box.Wrapper>
              ))}
            </Box.Group>

            <GTModal show={showModal} setShow={setShowModal} />
          </Content.Container>
        </Content.Wrapper>
        <GlobalStyle />
      </GtDesign>
    </GtProvider>
  );
}

export default App;
