import { ReactNode } from 'react';

import {
  BackgroundColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export interface InputProps
  extends LayoutProps,
    FlexboxProps,
    SpaceProps,
    PositionProps,
    BackgroundColorProps {
  children?: ReactNode;
}
