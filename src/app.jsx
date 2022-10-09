import React from 'react';
import LoaderEx from './examples/loader';
import SymbolPopup from './examples/popup';
import GlobalStyle from './global/style';
import GtDesign from './gtDesign';
import Navbar from './navbar/index';
import Symbol from './symbol';

function App() {
  return (
    <GtDesign>
      <Navbar.Wrapper>
        <Navbar.Content>
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
        </Navbar.Content>
      </Navbar.Wrapper>

      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>

      <LoaderEx />
      <GlobalStyle />
    </GtDesign>
  );
}

export default App;
