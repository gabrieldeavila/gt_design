import React from 'react';
import * as Icon from 'react-feather';
import Button from '../../button';
import Login from '../../Login';
import Space from '../../space';
import Text from '../../text';

function LoginEx() {
  return (
    <Login.Wrapper>
      <Login.BoxContrast>
        <Login.Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </Login.Title>
      </Login.BoxContrast>
      <Login.BoxPrimary />

      <Login.BoxMain>
        <Login.BoxWrapper>
          <Space.Flex>
            <Text.H1>Create a new account</Text.H1>
            <Text.P>Join the TIZ community and start sharing your ideas.</Text.P>
          </Space.Flex>
          <Login.InputWrapper>
            <Login.InputContainer>
              <Login.Label htmlFor="name">Your name</Login.Label>
              <Login.Input id="name" />
            </Login.InputContainer>

            <Login.InputContainer>
              <Login.Label htmlFor="email">Email</Login.Label>
              <Login.Input id="email" />
            </Login.InputContainer>

            <Login.InputContainer>
              <Login.Label htmlFor="password">Password</Login.Label>
              <Login.Input id="password" />
              <Icon.Eye />
            </Login.InputContainer>
          </Login.InputWrapper>
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
