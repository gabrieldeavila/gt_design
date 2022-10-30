import styled from 'styled-components/macro';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 4rem);
  padding-top: 4rem;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    padding-bottom: 5rem;
  }
`;

const ContentContainer = styled.div`
  margin: 1rem 1.5rem;

  /* when mobile, removes */
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export default {
  Wrapper: ContentWrapper,
  Container: ContentContainer
};
