import { ReactNode } from 'react';

import { DocObj } from '@components/DocBanner/DocBanner';
import { FlexboxProps, LayoutProps } from 'styled-system';

export interface ResultsProps extends LayoutProps, FlexboxProps, LayoutProps {
  children?: ReactNode;
  data?: DocObj[];
  square?: boolean;
  path?: string;
}
