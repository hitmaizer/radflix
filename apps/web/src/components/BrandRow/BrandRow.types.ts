import { ReactNode } from 'react';

import { DocObj } from '@components/DocBanner/DocBanner';
import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface BrandRowProps extends FlexboxProps, SpaceProps, LayoutProps {
  children?: ReactNode;
  title?: string;
  fetchURL?: string;
  square?: boolean;
  poster?: boolean;
  store?: DocObj[];
  path?: string;
}
