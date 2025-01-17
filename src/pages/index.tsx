import { Flex, Button, Stack } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex w='100vw' h='100vh' alignItems='center' justifyContent='center'>
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p={8}
        borderRadius={8}
        direction='column'
      >
        <Stack spacing={4}>
          <Input type='email' name='email' label='E-mail' />
          <Input type='password' name='password' label='Password' />
        </Stack>
        <Button type='submit' mt={6} color='white' bg='pink.500' size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
