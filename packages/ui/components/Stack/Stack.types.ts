import { ReactNode, HTMLAttributes } from 'react';

import { BoxProps } from 'components/Box/Box.types';
import { GridGapProps } from 'styled-system';

export interface StackProps
  extends BoxProps,
    GridGapProps,
    HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  children: ReactNode;
  placeContent?: 'flex-start' | 'flex-end' | 'center';
}
