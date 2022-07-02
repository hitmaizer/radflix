import React from 'react';

import Logged from '@components/Logged';
import MenuList from '@components/MenuList';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import { Button, Hamburger, Logo, Navbar, Text } from '@ui';

import * as S from './Header.styles';
import { HeaderProps } from './Header.types';

const Header = ({ children, filteredData, ...rest }: HeaderProps) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <S.Header {...rest}>
      <Navbar browse>
        <Link href="/browse" passHref>
          <a href="dummy">
            <Logo imgSrc="radflix-logo.png" width="100px" />
          </a>
        </Link>
        <MenuList ml={10} />
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
        <Hamburger open={isOpen} onClick={() => setIsOpen(!isOpen)} web>
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
