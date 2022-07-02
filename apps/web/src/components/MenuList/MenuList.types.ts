import { ReactNode } from 'react';

import {
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export interface MenuListProps
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    GridGapProps {
  children?: ReactNode;
  mob?: boolean;
}
