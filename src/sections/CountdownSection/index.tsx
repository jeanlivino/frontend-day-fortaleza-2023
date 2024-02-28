'use client';
import { Box, Grid } from '@/styled-system/jsx';
import React from 'react';
import { styled } from '@/styled-system/jsx';
import TimeCard from './TimeCard';
import useCountdown from '@/hooks/useCountdown';

const CountdownSection: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date('2023-10-14T08:00:00-03:00')
  );

  return (
    <Box>
      <styled.h3
        className='font-kdam'
        lineHeight='1.2'
        fontSize='3xl'
        textAlign='center'
        mb='7'
        textTransform='uppercase'
        color='white'
      >
        Fortaleza
      </styled.h3>
      <Box
        maxW='800px'
        p='2'
        bg='#8C5BF1'
        mx={['5', 'auto']}
        rounded='20px'
        boxShadow='0px 18px 35px -8px rgba(0,0,0,0.5)'
      >
        <Grid
          mx='auto'
          gridTemplateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
          gap='4'
        >
          <TimeCard number={days} text={days === 1 ? 'Dia' : 'Dias'} />
          <TimeCard number={hours} text={hours === 1 ? 'Hora' : 'Horas'} />
          <TimeCard
            number={minutes}
            text={minutes === 1 ? 'Minuto' : 'Minutos'}
          />
          <TimeCard
            number={seconds}
            text={seconds === 1 ? 'Segundo' : 'Segundos'}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default CountdownSection;
