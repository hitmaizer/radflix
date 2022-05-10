import Button from '@components/Button';
import Heading from '@components/Heading';

import * as S from './Login.styles';
import { LoginProps } from './Login.types';

const Login = ({ children }: LoginProps) => {
  return (
    <S.LoginContainer>
      <Heading color="white" size="3xl" fontWeight="bold">
        Sign In
      </Heading>
      <S.LogintInput type="text" placeholder="Email or phone number" mt={4} />
      <S.LogintInput type="password" placeholder="Password" />
      <Button mt={8} height="48px" />
      {children}
    </S.LoginContainer>
  );
};

export default Login;
