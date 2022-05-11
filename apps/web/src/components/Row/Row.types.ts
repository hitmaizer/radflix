import { ReactNode } from 'react';

import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface RowProps extends SpaceProps, FlexboxProps, LayoutProps {
  children?: ReactNode;
  title: string;
  fetchURL: string;
  square?: boolean;
  isBigRow?: boolean;
  poster?: boolean;
}
