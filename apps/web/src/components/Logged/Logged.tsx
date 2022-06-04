import { useState } from 'react';

import * as HoverCard from '@radix-ui/react-hover-card';
import { Pencil, QuestionCircle } from '@styled-icons/bootstrap';
import { useDispatch } from 'react-redux';
import { setFilteredData } from 'src/redux/filter';

import { Avatar, MenuItem } from '@ui';

import * as S from './Logged.styles';
import { LoggedProps } from './Logged.types';

const Logged = ({ children, imgSrc, filteredData, ...rest }: LoggedProps) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value;
    const newFilter = filteredData?.filter((value: any) => {
      return value.description.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      dispatch(setFilteredData([]));
    } else {
      dispatch(setFilteredData(newFilter));
    }
  };

  return (
    <S.Logged {...rest}>
      <S.SearchIcon
        size="24px"
        color="white"
        onClick={() => setShowFilter(!showFilter)}
      />
      {showFilter && (
        <S.FilterContainer>
          <S.Input placeholder="Search for movies" onChange={handleFilter} />
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
