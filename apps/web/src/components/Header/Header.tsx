import React from 'react';

import Logged from '@components/Logged';
import MenuList from '@components/MenuList';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from 'src/redux/show';
import { RootState } from 'src/redux/store';

import { Button, Hamburger, Logo, Navbar, Text } from '@ui';

import * as S from './Header.styles';
import { HeaderProps } from './Header.types';

const Header = ({ children, filteredData, ...rest }: HeaderProps) => {
  const { data: session } = useSession();
  const isOpen = useSelector((state: RootState) => state.open.open);
  const dispatch = useDispatch();

  return (
    <S.Header {...rest}>
      <Navbar browse open={isOpen}>
        <Link href="/browse" passHref>
          <a href="dummy">
            <Logo imgSrc="radflix-logo.png" width="100px" />
          </a>
        </Link>
        <MenuList ml={10} />
        <Logged
          imgSrc={session ? session?.user?.image! : '/placeholder-avatar.jpg'}
          display="flex"
          alignItems="center"
          filteredData={filteredData}
        >
          <Link href="/" passHref>
            <Button
              onClick={() =>
                signOut({
                  callbackUrl: `${window.location.origin}/`,
                })
              }
            >
              <Text>{session ? 'Logout' : 'Go Back'}</Text>
            </Button>
          </Link>
        </Logged>
        <Hamburger
          open={isOpen}
          onClick={() => dispatch(setIsOpen(!isOpen))}
          web
        >
          <MenuList mob />
          <Link href="/" passHref>
            <Button
              margin="0 auto"
              size="lg"
              onClick={() =>
                signOut({
                  callbackUrl: `${window.location.origin}/`,
                })
              }
            >
              <Text>Logout</Text>
            </Button>
          </Link>
        </Hamburger>
        {children}
      </Navbar>
    </S.Header>
  );
};

export default Header;
