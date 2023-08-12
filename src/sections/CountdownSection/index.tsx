'use client';
import { Box, Grid } from '@/styled-system/jsx';
import React from 'react';
import { styled } from '@/styled-system/jsx';
import TimeCard from './TimeCard';
import useCountdown from '@/hooks/useCountdown';

const CountdownSection: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date('2023-10-14T08:00:00.000Z')
  );

  return (
    <Box
      maxW='800px'
      p='8'
      bg='secondary'
      mx={['5', 'auto']}
      rounded='20px'
      top='-70px'
      position='relative'
      zIndex='1'
      boxShadow='0px 18px 35px -8px rgba(0,0,0,0.5)'
    >
      <styled.h3
        fontWeight='700'
        lineHeight='1.2'
        fontSize='3xl'
        textAlign='center'
        mb='7'
      >
        O{' '}
        <styled.span color='white' textDecoration='underline'>
          maior
        </styled.span>{' '}
        encontro da
        <br />
        comunidade Front-End CE
      </styled.h3>
      <Grid
        maxW='500px'
        mx='auto'
        gridTemplateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
        gap='4'
        mt='4'
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
  );
};

export default CountdownSection;
