import * as S from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({ imgSrc }: LogoProps) => {
  return <S.Logo src={imgSrc} width="167px" />;
};

export default Logo;

Logo.defaultProps = {
  imgSrc: 'assets/radflix-logo.png',
};
