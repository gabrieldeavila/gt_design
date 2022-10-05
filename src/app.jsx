import React from 'react';
import GlobalStyle from './global/style';
import GtDesign from './gtDesign';
import Navbar from './navbar/index';

function App() {
  return (
    <GtDesign>
      <Navbar.Wrapper>
        <Navbar.Content>
          <p>oi</p>
        </Navbar.Content>
      </Navbar.Wrapper>
      <GlobalStyle />
    </GtDesign>
  );
}

export default App;
