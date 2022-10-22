import { PropTypes } from 'prop-types';
import React, { memo, useCallback, useMemo, useState } from 'react';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';
import useVerifyEmail from '../../hooks/useVerifyEmail';

const verificationDefault = ['valid'];

function GTInputEmail({ name, label, verification }) {
  const verificatioOptions = useMemo(
    () => [...verificationDefault, ...verification],
    [verification]
  );

  const [isValidEmail, setIsValidEmail] = useState(true);

  const { labelIsUp, handleInputChange, handleInputBlur, handleInputFocus } = useInputValues();
  const { verifyEmail } = useVerifyEmail();

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const isValid = verifyEmail(value, verificatioOptions);

      setIsValidEmail(isValid);
      handleInputChange(value);
    },
    [verificatioOptions, handleInputChange, verifyEmail]
  );

  return (
    <Input.Container>
      <Input.Label up={labelIsUp} htmlFor={name}>
        {label}
      </Input.Label>
      <Input.Input
        type="email"
        onChange={handleChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        id={name}
        name={name}
      />
      {!isValidEmail && <Input.Error>Invalid email!</Input.Error>}
    </Input.Container>
  );
}

export default memo(GTInputEmail);

GTInputEmail.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  verification: PropTypes.arrayOf(PropTypes.string)
};

GTInputEmail.defaultProps = {
  verification: verificationDefault
};
