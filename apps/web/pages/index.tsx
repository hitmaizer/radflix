import Link from 'next/link';
import Homepage from 'src/components/Homepage/Homepage';
import { Box, Button, Heading, Input, Logo, Stack, Text } from 'ui/components';

export default function Home() {
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
          <Link href="/login" passHref>
            <Button>Sign In</Button>
          </Link>
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
