import * as S from './ImageCard.styles';
import { ImageCardProps } from './ImageCard.types';

const Card = ({
  children,
  imgSrc,
  square,
  poster,
  blurhash,
  ...rest
}: ImageCardProps) => {
  return (
    <S.Card poster={poster} square={square} {...rest}>
      <>
        <S.CardImage
          src={imgSrc!}
          alt="placeholder"
          blurDataURL={blurhash}
          width="100%"
          height="100%"
          layout="fill"
        />
        {children}
      </>
    </S.Card>
  );
};

export default Card;
