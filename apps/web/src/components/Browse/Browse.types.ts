import { ReactNode } from 'react';

import {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export interface BrowseProps
  extends LayoutProps,
    FlexboxProps,
    SpaceProps,
    PositionProps {
  children?: ReactNode;
  open?: boolean;
}
