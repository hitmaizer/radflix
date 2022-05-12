import * as S from './Homepage.styles';
import { HomepageProps } from './Homepage.types';

const Homepage = ({ children }: HomepageProps) => {
  return <S.Homepage>{children}</S.Homepage>;
};

export default Homepage;
