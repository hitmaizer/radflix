import React from 'react';

import Logged from '@components/Logged';
import MenuList from '@components/MenuList';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import { Button, Logo, Navbar, Text } from '@ui';

import * as S from './Header.styles';
import { HeaderProps } from './Header.types';

const Header = ({ children, filteredData, ...rest }: HeaderProps) => {
  const { data: session } = useSession();
  return (
    <S.Header {...rest}>
      <Navbar browse>
        <Link href="/browse" passHref>
          <a href="dummy">
            <Logo imgSrc="radflix-logo.png" width="100px" />
          </a>
        </Link>
        <MenuList />
        <Logged
          imgSrc={session?.user?.image!}
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
              <Text>Logout</Text>
            </Button>
          </Link>
        </Logged>
        {children}
      </Navbar>
    </S.Header>
  );
};

export default Header;
