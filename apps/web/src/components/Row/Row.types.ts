import { ReactNode } from 'react';

import { MovieObj } from '@components/Banner/Banner.types';
import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface RowProps extends SpaceProps, FlexboxProps, LayoutProps {
  children?: ReactNode;
  title: string;
  fetchURL?: string;
  square?: boolean;
  isBigRow?: boolean;
  poster?: boolean;
  path?: string;
  store?: MovieObj[];
  shufflePl?: string;
}
