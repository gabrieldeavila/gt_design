import React, { useState } from 'react';
import GtProvider from './context/gt';
// import LoginEx from './examples/login_ex';
// import Page from './examples/page';
import GlobalStyle from './global/style';
import GtDesign from './gtDesign';
import Page from './examples/page/index';
import LoginEx from './examples/login_ex/index';

const darkThemeStyle = {
  primary: '#080808',
  secundary: '#242124',
  pageBackground: '#242124',
  contrast: '#fffafa',
  backgroundHover: '#696969',
  backgroundMobileNav: '#555d50',
  sunColor: '#b8860b',
  moonColor: '#00b7eb',
  loginBoxPrimary: '',
  errorColor: '#cd853f',
  btnShadow: '#ffff',
  textBtn: '#77b5fe',
  containerMain: '#36454f',
  containerSecondary: '#242124',
};

function App() {
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('darkTheme') === '1');
  const loginOrPage = localStorage.getItem('loginOrPage') === '1';

  return (
    <GtProvider darkTheme={darkTheme} setDarkTheme={setDarkTheme}>
      <GtDesign theme={darkTheme && darkThemeStyle}>
        {loginOrPage ? <LoginEx /> : <Page />}
        <GlobalStyle />
      </GtDesign>
    </GtProvider>
  );
}

export default App;
