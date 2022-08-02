import * as S from './Player.styles';
import { PlayerProps } from './Player.types';
import { useHeight } from './useHeight';

const Player = ({ children, vidSrc, playlist }: PlayerProps) => {
  return (
    <S.PlayerContainer innerHeight={useHeight()}>
      <S.Player
        allow="autoplay"
        src={
          playlist
            ? `https://www.youtube.com/embed/videoseries?list=${vidSrc}&autoplay=1&mute=1`
            : `https://www.youtube.com/embed/${vidSrc}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1`
        }
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
