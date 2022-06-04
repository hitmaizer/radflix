import { ReactNode } from 'react';

import { SkaterObj } from '@components/SkaterRow/SkaterRow.types';
import { FlexboxProps, LayoutProps } from 'styled-system';

export interface ResultsProps extends LayoutProps, FlexboxProps, LayoutProps {
  children?: ReactNode;
  data?: SkaterObj[];
  square?: boolean;
}
