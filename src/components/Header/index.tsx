import React from 'react';
import { Center, Flex, Grid, styled } from '@/styled-system/jsx';
import Container from '../Container';
import NextImage from 'next/image';
import { css } from '@/styled-system/css';
import Link from 'next/link';

const links = [
  {
    label: 'Mídia Kit',
    href: 'https://drive.google.com/file/d/1pJQyoUdeZ3DbVgsuMc5_7ec5tcR4X6bh/view?usp=sharing',
    target: '_blank',
  },
  // {
  //   label: 'Call 4 Papers',
  //   href: 'https://forms.gle/MKvpXUKVkCMdSzhh6',
  //   target: '_blank',
  // },
  {
    label: 'Palestrantes',
    href: '/palestrantes',
  },
  {
    label: 'Programação',
    href: '/agenda',
  },
  {
    label: 'Minha agenda',
    href: 'https://jv-farias.github.io/frontend-day-app/',
    target: '_blank',
  },
];

type Props = {
  isHome?: boolean;
};

const Header: React.FC<Props> = ({ isHome }) => {
  return (
    <styled.header
      pos={['relative', 'relative', 'absolute']}
      top={['0', '0']}
      left={['0', '0']}
      p={['0', '7']}
      w='100%'
    >
      <Container>
        <Flex
          gap={['4', '14']}
          p='4'
          justifyContent='center'
          alignItems='center'
          flexDirection={['column', 'row']}
        >
          <NextImage
            src='/images/logo-fendce.png'
            alt='Logo'
            width={200}
            height={50}
            className={css({
              '@media (max-width: 768px)': {
                width: '150px',
              },
            })}
          />
          <styled.a
            href='/midia-kit.pdf'
            target='_blank'
            rel='noreferrer'
            textDecoration='none'
            bg='#8C5BF1'
            color='white'
            py='3'
            px='5'
            rounded='10px'
            fontSize='lg'
            fontWeight='700'
            _hover={{ bg: '#9252e6' }}
          >
            Baixar mídia kit 2024
          </styled.a>
        </Flex>
      </Container>
    </styled.header>
  );
};

export default Header;
