import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const MotionWrapper = styled.div`
  position: relative;
  grid-row-end: span ${(props) => props.span || Math.floor(Math.random() * 10) + 10};
`;

const MotionContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default {
  Wrapper: MotionWrapper,
  Container: MotionContainer
};
