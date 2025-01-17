import { HStack, Button, Box } from '@chakra-ui/react';

export default function Pagination() {
  return (
    <HStack spacing={6} mt={8} justify='space-between' align='center'>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing={2}>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          colorScheme='pink'
          disabled
          _disabled={{ bgColor: 'pink.500', cursor: 'defaulrt' }}
        >
          1
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bgColor='gray.700'
          _hover={{ bg: 'gray.500' }}
        >
          2
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bgColor='gray.700'
          _hover={{ bg: 'gray.500' }}
        >
          3
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bgColor='gray.700'
          _hover={{ bg: 'gray.500' }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}
