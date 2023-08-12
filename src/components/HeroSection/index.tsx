import { Box, Container, Flex, Grid, styled } from '@/styled-system/jsx';
import React from 'react';
import NextImage from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <Flex
      alignItems='center'
      bgImage="url('/images/banner_bg.png')"
      bgSize='cover'
      bgPosition='center'
      minHeight='80vh'
      p='10'
      pt='24'
    >
      <Grid gap={['10', '20']} gridTemplateColumns={['1fr', '1.7fr 1fr']}>
        <Box>
          <styled.h1
            fontWeight='700'
            lineHeight='1.2'
            color='white'
            fontSize={['2xl', '3xl']}
          >
            Um dia de evento com alto volume de{' '}
            <styled.span color='secondary'>
              conteúdo sobre Front-End, Back-End, carreira, empreendedorismo
            </styled.span>{' '}
            e muito mais!
          </styled.h1>
          <styled.h3
            color='primary'
            fontWeight='700'
            textTransform='uppercase'
            fontSize='lg'
            mt='7'
            bg='secondary'
            display='inline-block'
            p='2'
          >
            14.Outubro{' '}
            <styled.span ml='1' fontWeight='400'>
              Fortaleza
            </styled.span>
          </styled.h3>
        </Box>
        <NextImage
          src='/logo-vertical-white.svg'
          alt='logo'
          width={300}
          height={500}
        />
      </Grid>
    </Flex>
  );
};

export default HeroSection;
