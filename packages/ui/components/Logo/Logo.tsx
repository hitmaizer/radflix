import * as S from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({ imgSrc, width }: LogoProps) => {
  return <S.Logo src={imgSrc} width={width} />;
};

export default Logo;

Logo.defaultProps = {
  imgSrc: 'assets/radflix-logo.png',
};
