import React, { useState } from 'react';
import GtProvider from './context/gt';
import Page from './examples/page';
import GlobalStyle from './global/style';
import GtDesign from './gtDesign';
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
        <Page showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </GtDesign>
    </GtProvider>
  );
}

export default App;
