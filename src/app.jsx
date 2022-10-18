import React, { useState } from 'react';
import GtProvider from './context/gt';
import LoginEx from './examples/login_ex';
// import Page from './examples/page';
import GlobalStyle from './global/style';
import GtDesign from './gtDesign';

const darkThemeStyle = {
  primary: '#080808',
  secundary: '#242124',
  contrast: '#fffafa',
  backgroundHover: '#696969',
  backgroundMobileNav: '#555d50',
  sunColor: '#daa520',
  moonColor: '#191970',
  btnShadow: '#ffff',
  loginBoxContrast: '#fffafa',
  loginBoxPrimary: '#555555'
};

function App() {
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('darkTheme') === '1');

  return (
    <GtProvider darkTheme={darkTheme} setDarkTheme={setDarkTheme}>
      <GtDesign theme={darkTheme && darkThemeStyle}>
        {/* <Page  /> */}
        <LoginEx />
        <GlobalStyle />
      </GtDesign>
    </GtProvider>
  );
}

export default App;
