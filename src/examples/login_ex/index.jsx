import React from 'react';
import Button from '../../button';
import Input from '../../input';
import GTInput from '../../input/GTInput';
import Login from '../../Login';
import Space from '../../space';
import Text from '../../text';

function LoginEx() {
  return (
    <Login.Wrapper>
      <Login.BoxContrast>
        <Login.Title>
          Tag, Ilustrate and Zap!
          <br />
          With TIZ
        </Login.Title>
      </Login.BoxContrast>
      <Login.BoxPrimary />

      <Login.BoxMain>
        <Login.BoxWrapper>
          <Space.Flex>
            <Text.H1>Create a new account</Text.H1>
            <Text.P>Join the TIZ community and start sharing your ideas.</Text.P>
          </Space.Flex>
          <Input.Wrapper>
            <GTInput.Text name="name" label="Your Name" />

            <GTInput.Email verifications={['valid']} name="email" label="Email" />

            <GTInput.Password name="password" label="Password" />
          </Input.Wrapper>
          <Space.Flex>
            <Text.P sm>
              By creating your Tiz account, you agree to our Terms, Data Policy and Cookies Policy.
            </Text.P>
            <Space.FullSpace>
              <Button.Normal>Create your Tiz account</Button.Normal>
            </Space.FullSpace>
          </Space.Flex>
        </Login.BoxWrapper>
      </Login.BoxMain>
    </Login.Wrapper>
  );
}

export default LoginEx;
