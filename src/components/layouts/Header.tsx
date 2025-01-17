import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiUserAddLine,
  RiNotificationLine,
  RiSearchLine,
} from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h={20}
      mx='auto'
      mt={4}
      px={6}
      align='center'
    >
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w={64}>
        DashGo
        <Text as='span' color='pink.500' ml={1}>
          .
        </Text>
      </Text>
      <Flex
        as='label'
        flex={1}
        py={4}
        px={8}
        ml={6}
        maxWidth={400}
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >
        <Input
          color='gray.50'
          variant='unstyled'
          px={4}
          mr={4}
          placeholder='Buscar na plataforma'
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize='20' />
      </Flex>

      <Flex align='center' margin='auto'>
        <HStack
          spacing={8}
          mx={8}
          pr={8}
          py={1}
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'
        >
          <Icon as={RiNotificationLine} fontSize='20' />
          <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>

        <Flex align='center'>
          <Box mr={4} textAlign='right'>
            <Text>Leandro Machado</Text>
            <Text color='gray.300' fontSize='small'>
              leandrofahur@gmail.com
            </Text>
          </Box>

          <Avatar
            size='md'
            name='Leandro Machado'
            src='https://avatars.githubusercontent.com/u/46628080?s=400&u=407f981fe1421c5aaeaf34709ec2e75a4f1bde72&v=4'
          ></Avatar>
        </Flex>
      </Flex>
    </Flex>
  );
}
