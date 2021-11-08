import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/layouts/Header';
import { Sidebar } from '../../components/layouts/Sidebar';
import Pagination from '../../components/Pagination';

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my={6} maxWidth={1480} mx='auto' px={6}>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p={8}>
          <Flex mb={8} justify='space-between' align='center' width='100%'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
            </Heading>
            <Button
              as='a'
              size='sm'
              fontSize='sm'
              color='white'
              bg='pink.500'
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={6} color='gray.300' width={8}>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th width={8}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={6}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Leandro Machado</Text>
                    <Text fontsize='sm' color='gray.300'>
                      leandrofahur@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>21 de Abril, 2021</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    color='white'
                    bg='purple.500'
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={6}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Leandro Machado</Text>
                    <Text fontsize='sm' color='gray.300'>
                      leandrofahur@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>21 de Abril, 2021</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    color='white'
                    bg='purple.500'
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={6}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Leandro Machado</Text>
                    <Text fontsize='sm' color='gray.300'>
                      leandrofahur@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>21 de Abril, 2021</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    color='white'
                    bg='purple.500'
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
