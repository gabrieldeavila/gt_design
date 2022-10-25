import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const GTPageStateContext = createContext();

function GTPageStateProvider({ errors, setErrors, pageState, setPageState, children }) {
  const [canSave, setCanSave] = useState(false);

  const values = useMemo(
    () => ({
      pageState,
      setPageState,
      canSave,
      setCanSave,
      errors,
      setErrors
    }),
    [canSave, errors, pageState, setErrors, setPageState]
  );

  return <GTPageStateContext.Provider value={values}>{children}</GTPageStateContext.Provider>;
}

export default GTPageStateProvider;

GTPageStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  setErrors: PropTypes.func.isRequired,
  pageState: PropTypes.objectOf(PropTypes.string).isRequired,
  setPageState: PropTypes.func.isRequired
};
