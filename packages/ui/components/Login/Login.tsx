import { Heading } from '@ui';

import * as S from './Login.styles';
import { LoginProps } from './Login.types';

const Login = ({ children }: LoginProps) => {
  return (
    <S.LoginContainer>
      <Heading color="white" size="3xl" fontWeight="bold">
        Sign In
      </Heading>
      {children}
    </S.LoginContainer>
  );
};

export default Login;
