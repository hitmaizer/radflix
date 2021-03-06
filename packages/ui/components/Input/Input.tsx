import { NavigateNext } from '@styled-icons/material';

import { Box, Button, Text } from '@ui';

import * as S from './Input.styles';
import { InputProps } from './Input.types';

const Input = ({ children, ...rest }: InputProps) => {
  return (
    <Box display="flex" flexDirection="row" {...rest}>
      <S.Input type="text" placeholder="Email address" />
      <Button
        borderRadius="0px"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        padding="0 30px"
      >
        <>
          <Text size="md">{children}</Text>
          <NavigateNext size="32px" color="white" />
        </>
      </Button>
    </Box>
  );
};

export default Input;

Input.defaultProps = {
  children: 'Get Started',
};
