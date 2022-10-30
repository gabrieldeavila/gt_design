/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import Box from '../../box';
import Content from '../../Content';
import GTModal from '../../modal/gt';
import GTNavbar from '../../navbar/gt';
import Text from '../../text';
// import LoaderEx from '../loader';
import GTSwitchThemes from '../../switch/gt';

function Page() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <GTNavbar showModal={showModal} />

      <Content.Wrapper>
        <Content.Container>
          <Box.Column>
            {[1, 2, 3, 4, 6, 7, 8, 2, 2, 32, 1, 321].map((i) => (
              <Box.Container>
                <Text.H1>Heading {i}</Text.H1>
              </Box.Container>
            ))}
          </Box.Column>
          <GTModal show={showModal} setShow={setShowModal} />
        </Content.Container>
      </Content.Wrapper>

      <GTSwitchThemes fixed placeX="bottom" placeY="left" />
    </>
  );
}

export default Page;
