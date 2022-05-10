import { SpaceProps } from 'styled-system';

export interface NormalInputProps extends SpaceProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
