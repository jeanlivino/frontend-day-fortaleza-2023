import React from 'react';
import { Flex, Grid, styled } from '@/styled-system/jsx';
import Container from '../Container';
import NextImage from 'next/image';
import { css } from '@/styled-system/css';

const links = [
  {
    label: 'Mídia Kit',
    href: 'https://drive.google.com/file/d/1pJQyoUdeZ3DbVgsuMc5_7ec5tcR4X6bh/view?usp=sharing',
  },
  {
    label: 'Seja palestrante',
    href: 'https://forms.gle/MKvpXUKVkCMdSzhh6',
  },
  {
    label: 'Palestrantes',
    href: '#',
  },
  {
    label: 'Comunidades',
    href: '#',
  },
];

const Header: React.FC = () => {
  return (
    <styled.header
      pos={['relative', 'relative', 'absolute']}
      top={['0', '0']}
      left={['0', '0']}
      p={['0', '7']}
      w='100%'
      mb={['7', '0']}
    >
      <Container px='0'>
        <Grid
          gridTemplateColumns={['1fr', '1fr', '150px auto 200px']}
          gap={['7', '10']}
        >
          <NextImage
            src='/images/logo-fendce.png'
            alt='Logo'
            width={200}
            height={50}
            style={{ margin: 'auto' }}
            className={css({
              '@media (max-width: 768px)': {
                width: '150px',
              },
            })}
          />
          <Flex gap='6' justifyContent={'center'} width='100%' flexWrap='wrap'>
            {links.map((link) => (
              <styled.a
                href={link.href}
                key={link.label}
                alignSelf='center'
                color='white'
                target='_blank'
                textTransform='uppercase'
                _hover={{
                  color: 'secondary',
                }}
              >
                {link.label}
              </styled.a>
            ))}
          </Flex>
          <styled.button
            color='primary'
            bg='tertiary'
            rounded='100px'
            textTransform='uppercase'
            fontWeight='bold'
            maxWidth='200px'
            width='100%'
            mx='auto'
            px='9'
            py='2'
          >
            Ingressos
          </styled.button>
        </Grid>
      </Container>
    </styled.header>
  );
};

export default Header;
