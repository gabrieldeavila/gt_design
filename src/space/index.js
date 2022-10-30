import styled from 'styled-components/macro';
import { space } from 'styled-system';
import flex from '../utils/flex';

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
  width: -webkit-fill-available;
  ${space}
`;

const FlexCenter = styled(Flex)`
  ${flex.alignCenter}
`;

const FlexCenterRow = styled(Flex)`
  ${flex.alignCenterCol}
`;

const FullSpace = styled.div`
  width: -webkit-fill-available;
  height: fit-content;

  > * {
    width: 100%;
    height: 100%;
  }
`;

const Center = styled.div`
  ${flex.alignCenter}
`;

export default {
  Flex,
  FlexCenter,
  FlexCenterRow,
  FullSpace,
  Center
};
