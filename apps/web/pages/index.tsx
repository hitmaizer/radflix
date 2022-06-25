import { GetStaticProps } from 'next';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setMovies } from 'src/redux/allMovies';

import { Homepage } from '@components';
import { Box, Button, Heading, Input, Logo, Stack, Text } from '@ui';

export default function Home({ allMovies }: any) {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLink = () => {
    router.push('/browse');
    dispatch(setMovies(allMovies));
  };
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
                ? () => handleLink()
                : () =>
                    signIn('google', {
                      callbackUrl: `${window.location.origin}/browse`,
                    })
            }
          >
            {!session ? <Text>Sign In</Text> : <Text>Browse Movies</Text>}
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

export const getStaticProps: GetStaticProps = async () => {
  const request1 = await fetch(
    'https://radflix-cms.herokuapp.com/api/all-movies?populate=*'
  );
  const allMovies = await request1.json();

  return {
    props: {
      allMovies: allMovies.data,
    },
    revalidate: 43200,
  };
};
