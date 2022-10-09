import React from 'react';
import GlobalStyle from './global/style';
import GtDesign from './gtDesign';
import Navbar from './navbar/index';
import Popup from './popup';
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
                <Symbol.Wrapper>
                  <Popup.Wrapper>
                    <Popup.Container>ee</Popup.Container>
                  </Popup.Wrapper>
                  <Symbol.Container>
                    <Symbol.Image src="https://thispersondoesnotexist.com/image" />
                  </Symbol.Container>
                </Symbol.Wrapper>
              </Navbar.OptionWrapper>
            </Navbar.Options>
          </Navbar.Right>
        </Navbar.Content>
      </Navbar.Wrapper>
      <GlobalStyle />
    </GtDesign>
  );
}

export default App;
