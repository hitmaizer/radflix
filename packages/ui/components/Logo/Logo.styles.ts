import styled from 'styled-components';

import { LogoProps } from './Logo.types';

export const Logo = styled.img<LogoProps>`
  width: ${({ width }) => width};
  cursor: pointer;
`;
