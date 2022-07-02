import { useEffect, useState } from 'react';

import { Button, Logo } from '@ui';

import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }

      return () => {
        window.removeEventListener('scroll', () => {});
      };
    });
  }, []);

  return (
    <S.Navbar show={show} {...rest}>
      {children}
    </S.Navbar>
  );
};

export default Navbar;

Navbar.defaultProps = {
  children: (
    <>
      <Logo imgSrc="/radflix-logo.svg" />
      <Button padding="7px 17px" />
    </>
  ),
};
