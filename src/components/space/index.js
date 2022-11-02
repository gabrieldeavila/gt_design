import { css } from 'styled-components';
import styled from 'styled-components/macro';
import { space } from 'styled-system';
import flex from '../../utils/flex';

const customHeight = css`
  height: ${(props) => props.height};
`;

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
  width: -webkit-fill-available;
  ${space}

  ${customHeight};
`;

const FlexCenter = styled(Flex)`
  ${flex.alignCenter}

  ${space}
`;

const FlexCenterRow = styled(Flex)`
  ${flex.alignCenterCol}
  ${space}
`;

const FullSpace = styled.div`
  width: -webkit-fill-available;
  height: fit-content;

  > * {
    width: 100%;
    height: 100%;
  }

  ${customHeight};
  ${space}
`;

const Center = styled.div`
  ${flex.alignCenter}

  ${customHeight};
  ${space}
`;

export default {
  Flex,
  FlexCenter,
  FlexCenterRow,
  FullSpace,
  Center
};
