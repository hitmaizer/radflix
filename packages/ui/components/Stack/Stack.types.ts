import { ReactNode, HTMLAttributes } from 'react';

import { GridGapProps } from 'styled-system';

import { BoxProps } from '../Box/Box.types';

export interface StackProps
  extends BoxProps,
    GridGapProps,
    HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  children: ReactNode;
  placeContent?: 'flex-start' | 'flex-end' | 'center';
}
