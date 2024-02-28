import { Box, Flex, Grid, styled } from '@/styled-system/jsx';
import React from 'react';
import NextImage from 'next/image';
import Header from '@/components/Header';
import { css } from '@/styled-system/css';

import styles from './hero.module.css';
import Container from '@/components/Container';

const HeroSection: React.FC = () => {
  return (
    <Box
      bgImage='url(/images/galaxy.jpg)'
      bgSize='cover'
      bgPosition='top'
      px='10'
      pt={['5', '5', '24']}
      pb='28'
    >
      <Header isHome />
      <Flex alignItems='center' justifyContent='center'>
        <Grid
          py={['10', '20']}
          gap={['10', '14']}
          gridTemplateColumns={['1fr', '1fr 1fr']}
          maxW='1043px'
        >
          <Box alignSelf='center'>
            <styled.h1
              className='font-kdam'
              lineHeight='1.2'
              textTransform='uppercase'
              color='#8C5BF1'
              fontSize={['2xl', '4xl']}
            >
              O MAIOR EVENTO DA COMUNIDADE fRONT END CE
            </styled.h1>

            <styled.p
              color='white'
              fontSize={['md', 'xl']}
              lineHeight='1.5'
              mt='4'
            >
              12 horas de alto nível de conteúdo e networking para estudantes,
              profissionais e entusiastas em Front-End, Back-End, UX,
              empreendedorismo, carreira, tecnologia e inovação.
            </styled.p>
          </Box>
          <Box pos='relative'>
            <NextImage
              src='/logo-purple.svg'
              alt='logo'
              width={400}
              height={300}
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

      <styled.h3
        className='font-kdam'
        lineHeight='1.2'
        fontSize='3xl'
        textAlign='center'
        mb='7'
        textTransform='uppercase'
        color='white'
      >
        Veja como foi a edição de 2023
      </styled.h3>
      <Container>
        <iframe
          width='100%'
          height='auto'
          style={{
            aspectRatio: '16/9',
          }}
          src='https://www.youtube.com/embed/p1Y2J6Bz97o'
          title='Front-End Day 2023 - Fortaleza'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
      </Container>
    </Box>
  );
};

export default HeroSection;
