import _ from 'lodash';
import { useCallback, useState } from 'react';

function useInputValues() {
  const [value, setValue] = useState('');
  const [labelIsUp, setLabelIsUp] = useState(false);

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
