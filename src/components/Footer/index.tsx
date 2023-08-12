import { Box, Flex, styled } from '@/styled-system/jsx';
import React from 'react';
import Container from '../Container';
import NextImage from 'next/image';

const Footer: React.FC = () => {
  return (
    <Box
      bgColor='primary'
      bgImage="url('/images/banner_bg.png')"
      bgSize='cover'
      bgPosition='center'
      p='10'
    >
      <Container>
        <Flex
          justifyContent='space-between'
          alignItems='center'
          flexDirection={['column', 'row']}
          gap='4'
        >
          <NextImage
            src='/images/logo-fendce.png'
            alt='Logo'
            width={130}
            height={50}
          />
          <Flex gap='4'>
            <styled.a
              href='https://chat.whatsapp.com/KjuHQ55RV6FBERixk5eg6g'
              target='_blank'
            >
              <NextImage
                src='/images/whatsapp.svg'
                alt='Whatsapp'
                width={20}
                height={20}
              />
            </styled.a>
            <styled.a
              href='https://www.linkedin.com/company/front-end-ce/'
              target='_blank'
            >
              <NextImage
                src='/images/linkedin.svg'
                alt='Linkedin'
                width={20}
                height={20}
              />
            </styled.a>
            <styled.a
              href='https://www.instagram.com/frontendce/'
              target='_blank'
            >
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
            fontSize={['12px', 'sm']}
            px='9'
            py='2'
          >
            Comprar Ingresso
          </styled.button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
