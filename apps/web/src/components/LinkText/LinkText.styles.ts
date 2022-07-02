import styled from 'styled-components';

import { LinkTextProps } from './LinkText.types';

export const LinkText = styled.a<LinkTextProps>`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ href, pathName }) => (href === pathName ? 'bold' : '400')};
  transition: color 300ms ease;
  width: 100%;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
