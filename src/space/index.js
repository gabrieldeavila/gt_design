import styled from 'styled-components';
import { space } from 'styled-system';

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
  ${space}
`;

const FullSpace = styled.div`
  width: -webkit-fill-available;
  height: fit-content;

  > * {
    width: 100%;  
    height: 100%;
  }
`;

export default {
  Flex,
  FullSpace,
};
