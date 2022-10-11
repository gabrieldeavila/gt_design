import React from 'react';
import Box from './box';
import Content from './Content';
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
        <Navbar.Container>
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
        </Navbar.Container>
      </Navbar.Wrapper>

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
                  último
                </Box.Container>
              </Box.Wrapper>
            ))}
          </Box.Group>
        </Content.Container>
      </Content.Wrapper>
      <GlobalStyle />
    </GtDesign>
  );
}

export default App;
