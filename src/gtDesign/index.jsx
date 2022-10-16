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
  theme: {
    primary: '#FFFFFF',
    secundary: '#fefefa',
    contrast: '#000000',
    backgroundHover: '#f5f5f5',
    backgroundMobileNav: '#f2f3f4'
  }
};
