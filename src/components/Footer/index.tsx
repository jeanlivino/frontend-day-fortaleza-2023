import { Box, Flex, styled } from '@/styled-system/jsx';
import React from 'react';
import Container from '../Container';
import NextImage from 'next/image';

const Footer: React.FC = () => {
  return (
    <Box
      bgImage="url('/images/banner_bg.png')"
      bgSize='cover'
      bgPosition='center'
      p='10'
    >
      <Container>
        <Flex justifyContent='space-between' alignItems='center'>
          <NextImage
            src='/images/logo-fendce.png'
            alt='Logo'
            width={150}
            height={50}
          />
          <Flex gap='2'>
            <styled.a>
              <NextImage
                src='/images/whatsapp.svg'
                alt='Whatsapp'
                width={20}
                height={20}
              />
            </styled.a>
            <styled.a>
              <NextImage
                src='/images/linkedin.svg'
                alt='Linkedin'
                width={20}
                height={20}
              />
            </styled.a>
            <styled.a>
              <NextImage
                src='/images/instagram.svg'
                alt='Instagram'
                width={20}
                height={20}
              />
            </styled.a>
          </Flex>
          <styled.button
            color='primary'
            bg='tertiary'
            rounded='100px'
            textTransform='uppercase'
            fontWeight='bold'
            fontSize='sm'
            px='9'
            py='2'
          >
            Comprar Ingresso Agora
          </styled.button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
