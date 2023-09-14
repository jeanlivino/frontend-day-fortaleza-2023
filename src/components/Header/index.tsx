import React from 'react';
import { Flex, Grid, styled } from '@/styled-system/jsx';
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
    label: 'Agenda',
    href: '/agenda',
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
      mb={['7', '0']}
    >
      <Container px='0'>
        <Grid
          gridTemplateColumns={['1fr', '1fr', '150px auto 200px']}
          gap={['4', '10']}
        >
          <Link href='/'>
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
          </Link>
          <Flex
            gap={['3', '6']}
            justifyContent={'center'}
            width='100%'
            flexWrap='wrap'
          >
            {!isHome && (
              <styled.a
                href='/'
                alignSelf='center'
                color='white'
                textTransform='uppercase'
                _hover={{
                  color: 'secondary',
                }}
              >
                Home
              </styled.a>
            )}
            {links.map((link) => (
              <styled.a
                href={link.href}
                key={link.label}
                target={link.target}
                alignSelf='center'
                color='white'
                textTransform='uppercase'
                _hover={{
                  color: 'secondary',
                }}
              >
                {link.label}
              </styled.a>
            ))}
          </Flex>
          <styled.a
            color='primary'
            bg='tertiary'
            rounded='100px'
            textTransform='uppercase'
            textAlign='center'
            fontWeight='bold'
            maxWidth='200px'
            width='100%'
            mx='auto'
            px='9'
            py='2'
            target='_blank'
            href='https://www.eventbrite.com.br/e/699928714627?aff=site'
          >
            Ingressos
          </styled.a>
        </Grid>
      </Container>
    </styled.header>
  );
};

export default Header;
