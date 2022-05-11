import * as S from './Skeleton.styles';
import { SkeletonProps } from './Skeleton.types';

const Skeleton = ({ children, ...rest }: SkeletonProps) => {
  return (
    <S.Skeleton {...rest}>
      <S.ShimmerWrapper>
        <S.Shimmer />
      </S.ShimmerWrapper>
      {children}
    </S.Skeleton>
  );
};

export default Skeleton;

Skeleton.defaultProps = {
  card: true,
};
