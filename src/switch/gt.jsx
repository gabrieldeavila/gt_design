import React, { memo, useCallback, useContext } from 'react';
import * as Icon from 'react-feather';
import Switch from '.';
import { GtContext } from '../context/gt';

function GTSwitchThemes() {
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
    <Switch.Label htmlFor="darkId">
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
