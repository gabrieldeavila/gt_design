import React, { useState } from 'react';
import Box from './box';
import Button from './button';
import Content from './Content';
import LoaderEx from './examples/loader';
import GlobalStyle from './global/style';
import GtDesign from './gtDesign';
import GTModal from './modal/gt';
import GTNavbar from './navbar/gt';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <GtDesign>
      <GTNavbar showModal={showModal} />
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
                  <Button.Wrapper justifyContent="center">
                    <Button.Normal type="submit" onClick={() => setShowModal(true)}>
                      Clique p/ abrir modal
                    </Button.Normal>
                    <Button.Contrast type="submit" onClick={() => setShowModal(true)}>
                      Clique p/ abrir modal
                    </Button.Contrast>
                  </Button.Wrapper>
                  último
                </Box.Container>
              </Box.Wrapper>
            ))}
          </Box.Group>

          <GTModal show={showModal} setShow={setShowModal} />
        </Content.Container>
      </Content.Wrapper>
      <GlobalStyle />
    </GtDesign>
  );
}

export default App;
