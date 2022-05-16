import * as S from './Card.styles';
import { CardProps } from './Card.types';

const Card = ({ children, imgSrc, square, poster, ...rest }: CardProps) => {
  return (
    <S.Card {...rest}>
      <>
        <S.Image
          src={imgSrc}
          alt="placeholder"
          square={square}
          poster={poster}
        />
        {children}
      </>
    </S.Card>
  );
};

export default Card;

Card.defaultProps = {
  imgSrc: '/assets/placeholder-card.jpg',
  title: 'Seinfeld: S03E21 Something',
  square: true,
};
