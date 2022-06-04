import { ReactNode } from 'react';

import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface LoggedProps extends FlexboxProps, SpaceProps, LayoutProps {
  children?: ReactNode;
  imgSrc: string | undefined;
  filteredData?: any[];
}
