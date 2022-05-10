import Homepage from 'src/components/Homepage/Homepage';

import { Box, Button, Login, Logo, Stack } from '@components';

const index = () => {
  return (
    <>
      <Homepage>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          p="16px 32px"
        >
          <Logo imgSrc="/radflix-logo.svg" />
          <Button>Sign In</Button>
        </Stack>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          pt={15}
        >
          <Login />
        </Box>
      </Homepage>
    </>
  );
};

export default index;
