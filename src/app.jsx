import React from 'react';
import Container from './container';
import { GlobalStyle } from './global/style';
import GtDesign from './gtDesign';

function App() {
  return (
    <GtDesign>
      <GlobalStyle />
      <Container>provar nada pra ninguem</Container>
    </GtDesign>
  );
}

export default App;
