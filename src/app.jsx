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
  loginBoxPrimary: '',
  btnShadow: '#ffff',
  loginBackground1: 'rgba(125, 197, 193, 1)',
  loginBackground2: 'rgba(167, 123, 243, 1)',
  loginBackground3: 'rgba(156, 194, 239, 1)',
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
