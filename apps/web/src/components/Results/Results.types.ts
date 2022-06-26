import { ReactNode } from 'react';

import { MovieObj } from '@components/Banner/Banner.types';
import { FlexboxProps, LayoutProps } from 'styled-system';

export interface ResultsProps extends LayoutProps, FlexboxProps, LayoutProps {
  children?: ReactNode;
  data?: MovieObj[];
  square?: boolean;
  path?: string;
  slug?: string;
}
