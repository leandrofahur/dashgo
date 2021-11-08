import React from 'react';
import dynamic from 'next/dynamic';

import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';

import { ApexOptions } from 'apexcharts';

// const Chart = dynamic(() => import('react-apexcharts'), {
//   ssr: false,
// });

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

import Header from '../components/layouts/Header';
import Sidebar from '../components/layouts/Sidebar';

const options: ApexOptions = {};
const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 51, 18, 109],
  },
];

export default function dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex width='100%' my={6} maxWidth={1480} mx='auto' px={6}>
        <Sidebar />

        <SimpleGrid flex={1} gap={4} minChildWidth='320px' align='flex-start'>
          <Box p={8} bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb={4}>
              Inscritos da Semana
            </Text>
            <Chart
              type={'area'}
              height={160}
              options={options}
              series={series}
            />
          </Box>
          <Box p={8} bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb={4}>
              Taxa de abertura
            </Text>
            <Chart
              type={'histogram'}
              height={160}
              options={options}
              series={series}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
