import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GTContainer from '../gtContainer';

const defaultTheme = {
  primary: '#FFFFFF',
  secundary: '#fefefa',
  contrast: '#000000',
  backgroundHover: '#f5f5f5',
  backgroundMobileNav: '#f2f3f4',
  sunColor: '#ffd700',
  moonColor: '#6050dc',
  btnShadow: '#000000',
  loginBoxContrast: '#555555',
  loginBoxPrimary: '#fffafa ',
};
function GtDesign({ theme, children }) {
  const themeStyle = { ...defaultTheme, ...theme };

  return (
    <ThemeProvider theme={themeStyle}>
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
  theme: defaultTheme
};
