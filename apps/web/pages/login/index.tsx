import { useState } from 'react';

import Homepage from '@components/Homepage';

import { Box, Button, Login, Logo, NormalInput, Stack } from '@ui';

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
          <Logo imgSrc="/radflix-logo.png" width="100px" />
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
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                onChange={(e) => setUsername(e.currentTarget.value)}
                value={username}
              />
              <NormalInput
                type="password"
                id="password"
                name="password"
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
