import * as S from './NormalInput.styles';
import { NormalInputProps } from './NormalInput.types';

const NormalInput = ({ type, ...rest }: NormalInputProps) => {
  return <S.NormalInput type={type} {...rest} />;
};

export default NormalInput;
