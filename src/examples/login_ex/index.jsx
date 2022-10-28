/* eslint-disable react/no-unescaped-entities */
import { PropTypes } from 'prop-types';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Button from '../../button';
import GTPageStateProvider, { GTPageStateContext } from '../../context/pageState';
import Input from '../../input';
import GTInput from '../../input/GTInput';
import Login from '../../Login';
import Space from '../../space';
import GTSwitchThemes from '../../switch/gt';
import Text from '../../text';

function LoginEx() {
  const [pageState, setPageState] = useState({});
  const [errors, setErrors] = useState([]);
  const [isCreate, setIsCreate] = useState(true);

  const canSave = useMemo(() => errors.length === 0, [errors]);

  return (
    <GTPageStateProvider
      {...{
        pageState,
        setPageState,
        errors,
        setErrors
        // eslint-disable-next-line react/jsx-closing-bracket-location
      }}>
      <Login.Wrapper>
        <GTSwitchThemes />
        <Login.BoxContrast />
        <Login.BoxPrimary />

        {isCreate ? (
          <LoginCreate setIsCreate={setIsCreate} canSave={canSave} />
        ) : (
          <LoginSignIn setIsCreate={setIsCreate} canSave={canSave} />
        )}
      </Login.Wrapper>
    </GTPageStateProvider>
  );
}

export default LoginEx;

function LoginCreate({ setIsCreate, canSave }) {
  return (
    <Login.BoxMain>
      <Login.BoxWrapper>
        <Space.Flex>
          <Text.H1>Create a new account</Text.H1>
          <Text.P>Join the TIZ community and start sharing your ideas.</Text.P>
        </Space.Flex>
        <Space.FullSpace>
          <Input.Wrapper>
            <GTInput.Text
              minChars="10"
              maxChars="20"
              minWords="2"
              maxWords="5"
              name="name"
              label="Your Name"
            />

            <GTInput.Text
              defaultValidation
              validations={['noSpaces']}
              name="nickname"
              label="Nickname"
            />

            <GTInput.Email name="email" label="Email" />

            <GTInput.Password name="password" label="Password" />
          </Input.Wrapper>
        </Space.FullSpace>
        <Space.Flex>
          <Text.P sm>
            By creating your Tiz account, you agree to our Terms, Data Policy and Cookies Policy.
          </Text.P>
          <Space.FullSpace>
            <Button.NormalShadow disabled={!canSave}>Create your Tiz account</Button.NormalShadow>
          </Space.FullSpace>

          <Space.Center>
            <Text.Btn sm onClick={() => setIsCreate(false)}>
              Already have an account?
            </Text.Btn>
          </Space.Center>
        </Space.Flex>
      </Login.BoxWrapper>
    </Login.BoxMain>
  );
}

LoginCreate.propTypes = {
  canSave: PropTypes.bool,
  setIsCreate: PropTypes.func
};

LoginCreate.defaultProps = {
  canSave: false,
  setIsCreate: () => {}
};

const signInFields = ['password', 'nickname'];
function LoginSignIn({ canSave, setIsCreate }) {
  const { setErrors, pageState } = useContext(GTPageStateContext);

  useEffect(() => {
    setErrors((prevErr) => {
      const newErr = prevErr.filter((err) => signInFields.includes(err));
      return newErr;
    });
  }, [setErrors]);

  const handleSignIn = useCallback(() => {
    console.log(pageState, 'handleSignIn');
  }, [pageState]);

  return (
    <Login.BoxMain>
      <Login.BoxWrapper>
        <Space.Flex>
          <Text.H1>Sign in to Tiz</Text.H1>
          <Text.P>It's nice to have you back</Text.P>
        </Space.Flex>
        <Space.FullSpace>
          <Input.Wrapper>
            <GTInput.Text
              defaultValidation
              validations={['noSpaces']}
              name="nickname"
              label="Nickname"
            />

            <GTInput.Password name="password" label="Password" />
          </Input.Wrapper>
        </Space.FullSpace>
        <Space.Flex>
          <Space.FullSpace>
            <Button.NormalShadow onClick={handleSignIn} disabled={!canSave}>
              Sign In
            </Button.NormalShadow>
          </Space.FullSpace>

          <Space.Center>
            <Text.Btn sm onClick={() => setIsCreate(true)}>
              Don't have an account?
            </Text.Btn>
          </Space.Center>
        </Space.Flex>
      </Login.BoxWrapper>
    </Login.BoxMain>
  );
}

LoginSignIn.propTypes = {
  canSave: PropTypes.bool,
  setIsCreate: PropTypes.func
};

LoginSignIn.defaultProps = {
  canSave: false,
  setIsCreate: () => {}
};
