import styled from 'styled-components';
import { space } from 'styled-system';

import { NormalInputProps } from './NormalInput.types';

export const NormalInput = styled.input<NormalInputProps>`
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
