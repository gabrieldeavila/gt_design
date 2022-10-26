import _ from 'lodash';
import { useCallback, useState, useContext } from 'react';
import { GTPageStateContext } from '../context/pageState';

function useInputValues(name) {
  const { pageState } = useContext(GTPageStateContext);

  const [value, setValue] = useState(pageState[name] || '');
  const [labelIsUp, setLabelIsUp] = useState(!!pageState[name]);

  const handleInputFocus = useCallback(() => {
    setLabelIsUp(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    if (_.isEmpty(value)) {
      setLabelIsUp(false);
    }
  }, [value]);

  const handleInputChange = useCallback(
    (val) => {
      if (!_.isEmpty(val) && _.isEmpty(value)) {
        setLabelIsUp(true);
      }
      setValue(val);
    },
    [value]
  );

  return { labelIsUp, value, setValue, handleInputChange, handleInputBlur, handleInputFocus };
}

export default useInputValues;
