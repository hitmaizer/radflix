import { useState } from 'react';

import * as HoverCard from '@radix-ui/react-hover-card';
import { Pencil, QuestionCircle } from '@styled-icons/bootstrap';

import { Avatar, MenuItem } from '@ui';

import * as S from './Logged.styles';
import { LoggedProps } from './Logged.types';

const Logged = ({ children, imgSrc, ...rest }: LoggedProps) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <S.Logged {...rest}>
      <S.SearchIcon
        size="24px"
        color="white"
        onClick={() => setShowFilter(!showFilter)}
      />
      {showFilter && (
        <S.FilterContainer>
          <S.Input placeholder="Search for movies" />
        </S.FilterContainer>
      )}
      <S.BellIcon size="24px" color="white" />
      <Avatar size="sm" imgSrc={imgSrc} />
      <HoverCard.Root openDelay={250} closeDelay={250}>
        <HoverCard.Trigger asChild>
          <S.ChevronIcon size="32px" color="white" />
        </HoverCard.Trigger>
        <S.Content>
          <MenuItem
            text="Manage Profile"
            icon={<Pencil size="16px" color="white" />}
          />
          <MenuItem
            text="Account"
            icon={<S.UserIcon size="16px" color="white" />}
          />
          <MenuItem
            text="Help"
            icon={<QuestionCircle size="16px" color="white" />}
          />
          {children}
        </S.Content>
      </HoverCard.Root>
    </S.Logged>
  );
};

export default Logged;
