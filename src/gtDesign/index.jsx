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
  glowShadow: '#39ff14',
  loginBackground1: 'rgba(125, 197, 193, 1)',
  loginBackground2: 'rgba(167, 123, 243, 1)',
  loginBackground3: 'rgba(156, 194, 239, 1)',
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
