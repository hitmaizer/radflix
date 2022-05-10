import { useState } from 'react';

import Homepage from 'src/components/Homepage/Homepage';

import { Box, Button, Login, Logo, NormalInput, Stack } from '@components';

const index = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
          <Login>
            <Stack display="flex" vertical gridGap="16px" mt={4}>
              <NormalInput
                type="text"
                placeholder="Enter your email"
                onChange={(e) => setUsername(e.currentTarget.value)}
                value={username}
              />
              <NormalInput
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Button mt={8} height="48px" />
            </Stack>
          </Login>
        </Box>
      </Homepage>
    </>
  );
};

export default index;
