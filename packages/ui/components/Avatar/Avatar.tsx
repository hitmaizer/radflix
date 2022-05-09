import * as S from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

const Avatar = ({ imgSrc, ...rest }: AvatarProps) => {
  return <S.Avatar src={imgSrc} {...rest} />;
};

export default Avatar;

Avatar.defaultProps = {
  imgSrc: '/assets/placeholder-avatar.jpg',
  size: 'xlg',
};
