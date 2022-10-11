import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GTContainer from '../gtContainer';

function GtDesign({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
      <GTContainer>{children}</GTContainer>
    </ThemeProvider>
  );
}

export default GtDesign;

GtDesign.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired
};

GtDesign.defaultProps = {
  theme: { primary: '#FFFFFF', secundary: '#F5F5F5', contrast: '#000000' }
};
