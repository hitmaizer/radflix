import { ReactNode } from 'react';

import {
  BackgroundColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export interface ButtonProps
  extends LayoutProps,
    FlexboxProps,
    SpaceProps,
    PositionProps,
    BackgroundColorProps {
  children?: ReactNode;
  borderRadius?: string;
  outline?: boolean;
  onClick?: () => void | Promise<undefined>;
  banner?: boolean;
  text?: boolean;
}
