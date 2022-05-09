import { Button, Logo, Stack } from 'ui/components';

export default function Home() {
  return (
    <>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p="16px 32px"
      >
        <Logo imgSrc="/radflix-logo.svg" />
        <Button>Sign In</Button>
      </Stack>
    </>
  );
}
