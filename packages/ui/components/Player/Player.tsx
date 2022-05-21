import * as S from './Player.styles';
import { PlayerProps } from './Player.types';
import { useActive } from './useActive';

const Player = ({ children, vidSrc }: PlayerProps) => {
  const active = useActive(4000);
  return (
    <S.PlayerContainer>
      {active && (
        <a href="/">
          <S.BackBtn />
        </a>
      )}
      <S.Player
        allow="autoplay"
        src={`https://www.youtube.com/embed/${vidSrc}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1`}
      >
        {children}
      </S.Player>
    </S.PlayerContainer>
  );
};

export default Player;

Player.defaultProps = {
  vidSrc: 'k-RY-1UPFgQ',
};
