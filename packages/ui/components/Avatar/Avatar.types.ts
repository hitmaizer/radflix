import { SpaceProps } from 'styled-system';

export interface AvatarProps extends SpaceProps {
  imgSrc?: string | null | undefined;
  size: 'sm' | 'md' | 'lg' | 'xlg';
}
