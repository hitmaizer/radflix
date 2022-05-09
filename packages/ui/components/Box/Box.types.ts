import {
  LayoutProps,
  PositionProps,
  FlexboxProps,
  SpaceProps,
  BackgroundColorProps,
} from 'styled-system';

export interface BoxProps
  extends LayoutProps,
    FlexboxProps,
    SpaceProps,
    PositionProps,
    BackgroundColorProps {
  children?: React.ReactNode;
}
