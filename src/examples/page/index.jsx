import React, { useState } from 'react';
import Box from '../../box';
import Button from '../../button';
import Content from '../../Content';
import GTModal from '../../modal/gt';
import GTNavbar from '../../navbar/gt';
import LoaderEx from '../loader';

function Page() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
    </>
  );
}

export default Page;
