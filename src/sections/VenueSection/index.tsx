import Container from '@/components/Container';
import { Box, Grid, styled } from '@/styled-system/jsx';
import React from 'react';
import NextImage from 'next/image';

const VenueSection: React.FC = () => {
  return (
    <Container>
      <Grid
        bg='white'
        p='4'
        gap='8'
        rounded='10px'
        gridTemplateColumns={['1fr', '1fr 1.5fr']}
        position='relative'
        bottom='-50px'
        zIndex='2'
      >
        <Box
          transition='all .3s ease-in-out'
          _hover={{
            opacity: '.7',
          }}
        >
          <NextImage
            src='/images/sonata.png'
            width={500}
            height={200}
            alt='Sonata'
            style={{ borderRadius: '10px' }}
          />
        </Box>
        <Box alignSelf='center'>
          <styled.h4
            fontSize='lg'
            fontWeight='bold'
            textTransform='uppercase'
            color='secondary'
          >
            local do evento
          </styled.h4>
          <styled.h3
            fontSize='2xl'
            fontWeight='bold'
            color='primary'
            textTransform='uppercase'
          >
            Hotel Sonata de Iracema
          </styled.h3>
          <styled.p fontSize='lg' fontWeight='normal'>
            Av. Beira Mar, 848 - Praia de Iracema
          </styled.p>
          <styled.a
            display='inline-block'
            fontSize='12px'
            textTransform='uppercase'
            bg='secondary.50'
            color='secondary'
            fontWeight='bold'
            mt='4'
            py='2'
            px='4'
            rounded='50px'
            href='https://goo.gl/maps/WDxYX4NBWvn8JRub6'
            target='_blank'
            _hover={{ bg: 'secondary.100' }}
          >
            Ir para o mapa
          </styled.a>
        </Box>
      </Grid>
    </Container>
  );
};

export default VenueSection;
