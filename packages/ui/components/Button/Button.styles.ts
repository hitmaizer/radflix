import styled, { css } from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';

import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${position}
  
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors?.primary};
  color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ borderRadius }) => borderRadius};
  min-width: fit-content;

  ${({ outline }) =>
    outline &&
    css`
      background-color: transparent;
      border: 1px solid white;
    `}

  ${({ banner }) =>
    banner &&
    css`
      font-weight: 700;
      padding: 0.5rem 2rem;
      background-color: rgba(255, 255, 255, 0.4);
      transition: all 300ms ease;
      &:hover {
        background-color: ${({ theme }) => theme.colors?.black};
        color: ${({ theme }) => theme.colors?.white};
      }
    `}
    
    ${({ text }) =>
    text &&
    css`
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors?.white};
    `}

    ${({ size }) =>
    size === 'lg' &&
    css`
      padding: 16px 82px;
    `}

    ${({ shuffle }) =>
    shuffle &&
    css`
      color: ${({ theme }) => theme.colors?.white};
      background-color: transparent;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 4px;
      transition: all 300ms ease;
      opacity: 0.5;
      transition: opacity 300ms ease;
      font-size: 0.8rem;
      &:hover {
        opacity: 1;
      }
    `}
`;
