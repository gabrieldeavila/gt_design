/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
import { useAnimation, useInView } from 'framer-motion';
import { PropTypes } from 'prop-types';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Content from '../../components/content';
// import LoaderEx from '../loader';
import Box from '../../components/box';
import GTModal from '../../components/modal/gt';
import Motion from '../../components/motion';
import GTNavbarMobile from '../../components/navbar/gtMobile';
import GTNavbar from '../../components/navbar/gtNavbar';
import GTSwitchThemes from '../../components/switch/gt';
import Text from '../../components/text';
import useIsMobile from '../../hooks/helpers/useIsMobile';
import randomNumber from '../../utils/randomNumber';

function Page() {
  const [showModal, setShowModal] = useState(false);
  const isMobile = useIsMobile();

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
              '#4b0082',
              '#008080',
              '#00ced1',
              '#00bfff',
              '#00ffff',
              '#ff00ff'
            ].map((bg, index) => (
              <BoxMotion bg={bg} key={bg} number={index} />
            ))}
          </Box.Column>
          <GTModal show={showModal} setShow={setShowModal} />
        </Content.Container>
      </Content.Wrapper>

      {!isMobile ? <GTSwitchThemes fixed placeX="bottom" placeY="left" /> : <GTNavbarMobile />}
    </>
  );
}

export default Page;

function BoxMotion({ bg, number }) {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const spanHeight = useMemo(() => randomNumber(10, 20), []);

  const boxVariant = useMemo(
    () => ({
      visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.2 } },
      hidden: { opacity: 0, scale: 0 }
    }),
    []
  );

  useEffect(() => {
    if (isInView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, isInView]);

  return (
    <Motion.Wrapper span={spanHeight}>
      <Motion.Container
        layoutId={number}
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}>
        <Box.Container bg={bg}>
          <Text.H1>{number}</Text.H1>
        </Box.Container>
      </Motion.Container>
    </Motion.Wrapper>
  );
}

BoxMotion.propTypes = {
  bg: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};
