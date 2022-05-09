import * as S from './Heading.styles';
import { HeadingProps } from './Heading.types';

const Heading = (props: HeadingProps) => {
  const { children, ...rest } = props;

  return <S.Heading {...rest}>{children}</S.Heading>;
};

Heading.defaultProps = {
  fontFamily: 'heading',
  size: '4xl',
  as: 'h1',
  children: 'All of your favorite extreme sports movies in a single place!',
  fontWeight: 'black',
};

export default Heading;
