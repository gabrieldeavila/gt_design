import React from 'react';
import GlobalStyle from './global/style';
import GtDesign from './gtDesign';
import Navbar from './navbar/index';

function App() {
  return (
    <GtDesign>
      <Navbar.Wrapper>
        <Navbar.Content>
          <Navbar.Left>
            <Navbar.Title>Gt Design</Navbar.Title>
            <Navbar.Options>
              <Navbar.Option>
                <Navbar.Text>Home</Navbar.Text>
                <Navbar.Popup>
                  <Navbar.Text>Home</Navbar.Text>
                  <Navbar.Text>Home</Navbar.Text>
                  <Navbar.Text>Home</Navbar.Text>
                </Navbar.Popup>
              </Navbar.Option>
              <Navbar.Option>
                <Navbar.Text>Projects</Navbar.Text>
              </Navbar.Option>
              <Navbar.Option>
                <Navbar.Text>About</Navbar.Text>
              </Navbar.Option>
            </Navbar.Options>
          </Navbar.Left>
        </Navbar.Content>
      </Navbar.Wrapper>
      <GlobalStyle />
    </GtDesign>
  );
}

export default App;
