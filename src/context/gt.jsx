import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const GtContext = createContext();

function GtProvider({ darkTheme, setDarkTheme, children }) {
  const values = useMemo(
    () => ({
      darkTheme,
      setDarkTheme
    }),
    [darkTheme, setDarkTheme]
  );

  return <GtContext.Provider value={values}>{children}</GtContext.Provider>;
}

export default GtProvider;

GtProvider.propTypes = {
  children: PropTypes.node.isRequired,
  darkTheme: PropTypes.bool.isRequired,
  setDarkTheme: PropTypes.func.isRequired
};
