import { ReactNode } from 'react';

import { MovieObj } from '@components/Banner/Banner.types';
import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface DocRowProps extends FlexboxProps, SpaceProps, LayoutProps {
  children?: ReactNode;
  title?: string;
  fetchURL?: string;
  square?: boolean;
  poster?: boolean;
  store?: MovieObj[];
}
