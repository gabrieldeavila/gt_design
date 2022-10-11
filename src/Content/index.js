import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 4rem);
  padding-top: 4rem;

  @media (max-width: 768px) {
    padding-bottom: 5rem;
  }
`;

const ContentContainer = styled.div`
  margin: 1rem 1.5rem;
`;

export default {
  Wrapper: ContentWrapper,
  Container: ContentContainer
};