import Box from '@components/Box';
import styled from 'styled-components';
import { gridGap } from 'styled-system';

import { StackProps } from './Stack.types';

export const Stack = styled(Box)<StackProps>`
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  place-content: ${({ placeContent }) => placeContent};
  ${gridGap};
  &::-webkit-scrollbar {
    display: none;
  }
`;
