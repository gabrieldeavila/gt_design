import React from 'react';
import Button from '../../button';
import Input from '../../input';
import GTInput from '../../input/GTInput';
import Login from '../../Login';
import Space from '../../space';
import Text from '../../text';
import GTSwitchThemes from '../../switch/gt';

function LoginEx() {
  return (
    <Login.Wrapper>
      <GTSwitchThemes />
      <Login.BoxContrast />
      <Login.BoxPrimary />

      <Login.BoxMain>
        <Login.BoxWrapper>
          <Space.Flex>
            <Text.H1>Create a new account</Text.H1>
            <Text.P>Join the TIZ community and start sharing your ideas.</Text.P>
          </Space.Flex>
          <Input.Wrapper>
            <GTInput.Text minWords="2" maxWords="5" name="name" label="Your Name" />

            <GTInput.Text defaultValidation validations={['noSpaces']} name="nickname" label="Nickname" />

            <GTInput.Email name="email" label="Email" />

            <GTInput.Password name="password" label="Password" />
          </Input.Wrapper>
          <Space.Flex>
            <Text.P sm>
              By creating your Tiz account, you agree to our Terms, Data Policy and Cookies Policy.
            </Text.P>
            <Space.FullSpace>
              <Button.NormalShadow>Create your Tiz account</Button.NormalShadow>
            </Space.FullSpace>
          </Space.Flex>
        </Login.BoxWrapper>
      </Login.BoxMain>
    </Login.Wrapper>
  );
}

export default LoginEx;
