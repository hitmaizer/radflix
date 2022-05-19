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
    <S.Card {...rest}>
      <>
        <S.CardImage
          src={imgSrc!}
          alt="placeholder"
          square={square}
          poster={poster}
          blurDataURL={blurhash}
          layout="fill"
        />
        {children}
      </>
    </S.Card>
  );
};

export default Card;
