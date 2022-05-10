import Avatar from '@components/Avatar';
import MenuItem from '@components/MenuItem';
import * as HoverCard from '@radix-ui/react-hover-card';
import { Pencil, QuestionCircle } from 'styled-icons/bootstrap';

import * as S from './Logged.styles';
import { LoggedProps } from './Logged.types';

const Logged = ({ children, imgSrc, ...rest }: LoggedProps) => {
  return (
    <S.Logged {...rest}>
      <S.SearchIcon size="24px" color="white" />
      <S.BellIcon size="24px" color="white" />
      <Avatar size="sm" imgSrc={imgSrc} />
      {children}
      <HoverCard.Root openDelay={250} closeDelay={250}>
        <HoverCard.Trigger asChild>
          <S.ChevronIcon size="32px" color="white" />
        </HoverCard.Trigger>
        <S.Content>
          <MenuItem
            text="Gerir Perfil"
            icon={<Pencil size="16px" color="white" />}
          />
          <MenuItem
            text="Conta"
            icon={<S.UserIcon size="16px" color="white" />}
          />
          <MenuItem
            text="Centro de assitência"
            icon={<QuestionCircle size="16px" color="white" />}
          />
          <a href="/home">Sair do Netflix</a>
        </S.Content>
      </HoverCard.Root>
    </S.Logged>
  );
};

export default Logged;