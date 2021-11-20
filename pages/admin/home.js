import React from 'react';
import {
  Stat, StatLabel, StatNumber, StatHelpText, Box, Flex
} from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import Admin from './index';
import { InstaProfile } from '../api/InstaProfile';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: '# of No Votes',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <Admin>
      <Flex flexDirection="row">
        
        <Box mx="6" w="70%" bg="gray.200" p="3" borderRadius="6" border="1px" borderColor="gray">
          <Line data={data} options={options} />
        </Box>
      </Flex>
      <Stat mt="6" w="125px" bg="gray.200" p="3" borderRadius="6" border="1px" borderColor="gray">
        <StatLabel>Collected Fees</StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
    </Admin>
  );
}

export async function getServerSideProps() {
  const daftarProfil = await InstaProfile()

  return {
    props: { daftarProfil }
  };
}