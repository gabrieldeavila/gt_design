import { PropTypes } from 'prop-types';
import React, { memo, useCallback, useContext } from 'react';
import * as Icon from 'react-feather';
import Switch from '.';
import { GtContext } from '../context/gt';

function GTSwitchThemes({ fixed, placeX, placeY }) {
  const { darkTheme, setDarkTheme } = useContext(GtContext);

  const handleTheme = useCallback(() => {
    setDarkTheme((prev) => {
      if (!prev) {
        localStorage.setItem('darkTheme', '1');
      } else {
        localStorage.removeItem('darkTheme', '0');
      }

      return !prev;
    });
  }, [setDarkTheme]);

  return (
    <Switch.Label fixed={fixed} placeX={placeX} placeY={placeY} htmlFor="darkId">
      <Switch.Input id="darkId" checked={darkTheme} onChange={handleTheme} type="checkbox" />
      <Switch.Slider>
        {!darkTheme ? <Icon.Sun className="sun" /> : <Icon.Moon className="moon" />}
      </Switch.Slider>

      <Switch.IconWrapper>
        <Icon.Sun />
        <Icon.Moon />
      </Switch.IconWrapper>
    </Switch.Label>
  );
}

export default memo(GTSwitchThemes);

// add default proptype
GTSwitchThemes.propTypes = {
  fixed: PropTypes.bool,
  placeX: PropTypes.oneOf([null, 'top', 'bottom']),
  placeY: PropTypes.oneOf([null, 'left', 'right'])
};

// add default props
GTSwitchThemes.defaultProps = {
  fixed: false,
  placeX: null,
  placeY: null
};
