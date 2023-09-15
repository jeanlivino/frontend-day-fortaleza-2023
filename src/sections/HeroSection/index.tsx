import { Box, Container, Flex, Grid, styled } from '@/styled-system/jsx';
import React from 'react';
import NextImage from 'next/image';
import Header from '@/components/Header';
import { css } from '@/styled-system/css';

import styles from './hero.module.css';

const HeroSection: React.FC = () => {
  return (
    <Box bgColor='primary' px='10' pt={['5', '5', '24']} pb='28'>
      <Header isHome />
      <Flex alignItems='center' justifyContent='center'>
        <Grid
          gap={['10', '14']}
          gridTemplateColumns={['1fr', '1.6fr 1fr']}
          maxW='1043px'
        >
          <Box alignSelf='center'>
            <styled.h1
              fontWeight='700'
              lineHeight='1.2'
              color='white'
              fontSize={['2xl', '3xl']}
            >
              Um dia de evento com alto volume de{' '}
              <styled.span color='secondary'>
                conteúdo sobre Front-End, UX, Back-End, carreira,
                empreendedorismo
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
          <Box pos='relative'>
            <NextImage
              src='/logo-vertical-white.svg'
              alt='logo'
              width={300}
              height={500}
              className={css({
                mx: 'auto',
                transition: 'all .3s ease-in-out',
                _hover: {
                  transform: 'scale(1.03)',
                  opacity: '.8',
                },
              })}
            />
            <div className={styles.neon}></div>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
};

export default HeroSection;
