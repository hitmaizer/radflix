import { GetServerSideProps } from 'next';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';

import { Homepage } from '@components';
import { Box, Button, Heading, Input, Logo, Stack, Text } from '@ui';

export default function Home() {
  const { data: session } = useSession();
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

          <Button
            padding="7px 17px"
            onClick={
              session
                ? () => signOut()
                : () =>
                    signIn('google', {
                      callbackUrl: `${window.location.origin}/browse`,
                    })
            }
          >
            {!session ? 'Sign In' : ' Sign Out'}
          </Button>
        </Stack>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          pt={15}
        >
          <Heading
            size="4xl"
            color="white"
            fontWeight="bold"
            textAlign="center"
          >
            All of your favorite extreme sports movies in a single place!
          </Heading>
          <Heading size="2xl" color="white" marginTop={4} fontWeight="regular">
            Watch anywhere. Cancel anytime.
          </Heading>
          <Text
            color="white"
            marginTop={8}
            textAlign="center"
            fontWeight="medium"
          >
            Ready to watch? Login and start watching right away!
          </Text>
          <Input mt={12} />
        </Box>
      </Homepage>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/browse',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
