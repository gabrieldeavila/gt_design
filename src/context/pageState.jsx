import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const GTPageStateContext = createContext();

function GTPageStateProvider({ children }) {
  const [pageState, setPageState] = useState({});

  const [canSave, setCanSave] = useState(false);

  const [errors, setErrors] = useState([]);

  const values = useMemo(
    () => ({
      pageState,
      setPageState,
      canSave,
      setCanSave,
      errors,
      setErrors
    }),
    [canSave, errors, pageState]
  );

  return <GTPageStateContext.Provider value={values}>{children}</GTPageStateContext.Provider>;
}

export default GTPageStateProvider;

GTPageStateProvider.propTypes = {
  children: PropTypes.node.isRequired
};
