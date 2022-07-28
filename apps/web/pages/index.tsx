import { StyledImage } from '@components/Homepage/Homepage.styles';
import { GetStaticProps } from 'next';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setMovies } from 'src/redux/allMovies';

import { Homepage, LinkText } from '@components';
import { Box, Button, Heading, Logo, Stack, Text } from '@ui';

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
      <StyledImage
        src="https://res.cloudinary.com/radflix-cms/image/upload/v1656242095/homepage_banner_12dea159ff.avif?updated_at=2022-06-26T11:14:56.920Z"
        layout="fill"
      />
      <Homepage>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          p={window.innerWidth > 1000 ? '16px 32px' : '0'}
        >
          <Logo imgSrc="/radflix-logo.png" width="100px" />
          <Stack
            display="flex"
            alignItems="center"
            justifyContent="center"
            gridGap="16px"
          >
            <LinkText pathName="/browse">Proceed without Login</LinkText>
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
        </Stack>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          height="90vh"
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
            Watch anywhere. 100% Free.
          </Heading>
          <Text
            color="white"
            marginTop={8}
            textAlign="center"
            fontWeight="medium"
          >
            Ready to watch? Login and start watching right away!
          </Text>
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
