import { useEffect, useState } from 'react';

import Button from 'components/Button';
import Logo from 'components/Logo';

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
      <Logo />
      <Button padding="7px 17px" />
    </>
  ),
};
