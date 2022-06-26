import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setFilteredData } from 'src/redux/filter';

import { Avatar } from '@ui';

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

      <Avatar size="sm" imgSrc={imgSrc} />

      {children}
    </S.Logged>
  );
};

export default Logged;
