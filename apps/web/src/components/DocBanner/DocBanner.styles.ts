import Image from 'next/image';
import styled from 'styled-components';

export const DocBanner = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
`;

export const SImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: top;
  background: linear-gradient(
    180deg,
    rgba(23, 23, 23, 1) 9%,
    rgba(23, 23, 23, 0.4822303921568627) 51%,
    rgba(23, 23, 23, 1) 100%
  );
`;
