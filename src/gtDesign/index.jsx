import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

function GtDesign({ theme, children }) {
  console.log(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default GtDesign;

GtDesign.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired
};

GtDesign.defaultProps = {
  theme: { primary: 'red', secundary: 'blue' }
};
