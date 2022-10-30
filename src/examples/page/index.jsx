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
            {[
              '#e0ffff',
              '#98fb98',
              'black',
              'white',
              '#2f4f4f',
              '#444c38',
              '#32174d',
              '#1c2841',
              '#008080',
              '#5f9ea0',
              '#6495ed',
              '#191970',
              '#e7feff',
              '#20b2aa',
              '#a0d6b4',
              '#66ddaa',
              '#00a693',
              '#a2add0',
              '#778ba5',
              '#0247fe',
              '#3f00ff',
              '#00a86b',
              '#555d50',
              '#2c1608',
              '#ffddf4',
              '#7cfc00',
              '#cae00d',
              '#db7093',
              '#7b68ee',
              '#8a2be2',
              '#4b0082'
            ].map((b, index) => (
              <Box.Container bg={b}>
                <Text.H1>{index}</Text.H1>
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
