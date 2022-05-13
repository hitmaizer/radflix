import * as S from './Skeleton.styles';
import { SkeletonProps } from './Skeleton.types';

const Skeleton = ({
  children,
  heading,
  card,
  text,
  banner,
  ...rest
}: SkeletonProps) => {
  return (
    <S.Skeleton
      heading={heading}
      card={card}
      text={text}
      banner={banner}
      {...rest}
    >
      <S.ShimmerWrapper>
        <S.Shimmer />
      </S.ShimmerWrapper>
      {children}
    </S.Skeleton>
  );
};

export default Skeleton;
