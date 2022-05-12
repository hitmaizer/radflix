import styled from 'styled-components';
import { space } from 'styled-system';

import { LoginProps } from './Login.types';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px 68px 40px;
  border-radius: 4px;
  max-width: 750px;
  min-width: 500px;
  gap: 16px;
`;

export const LogintInput = styled.input<LoginProps>`
  ${space}

  background-color: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.gray100};
  border: none;
  height: 50px;
  padding: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;
