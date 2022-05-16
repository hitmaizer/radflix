import { SpaceProps } from 'styled-system';

export interface AvatarProps extends SpaceProps {
  imgSrc?: string | undefined;
  size: 'sm' | 'md' | 'lg' | 'xlg';
}
