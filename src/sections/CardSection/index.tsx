'use client';
import './style.css';
import { Box, Flex, styled } from '@/styled-system/jsx';
import React, { useEffect, useMemo, useRef } from 'react';
import { css } from '@/styled-system/css';
import html2canvas from 'html2canvas';
import NextImage from 'next/image';
import { Orbitron } from 'next/font/google';
import { GitubUser, getGithubUserData } from '@/services/gh-user';
import HoverEffect from '@/components/HoverEffect';
import Loading from '@/components/Loading';
import Header from '@/components/Header';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['800'] });

const slugify = (text: string) => {
  return text.replace(/\s+/g, '-').toLowerCase();
};

const GitHubIcon = () => (
  <styled.svg
    fill='secondary'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 50 50'
    width='25px'
    height='25px'
  >
    <path d='M17.791 46.836A1.999 1.999 0 0 0 19 45v-5.4c0-.197.016-.402.041-.61A.611.611 0 0 1 19 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a21.537 21.537 0 0 1-.151-.987c1.797-.296 4.843-.647 8.345-.714a8.162 8.162 0 0 1-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a9.832 9.832 0 0 1-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8.272 8.272 0 0 1-.325.98c3.546.046 6.665.389 8.548.689-.043.332-.093.661-.151.987-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836z' />
  </styled.svg>
);

type Props = {
  userId: string;
  article: string;
};

const CardSection: React.FC<Props> = ({ userId, article }) => {
  const [isPrinting, setIsPrinting] = React.useState(false);
  const [user, setUser] = React.useState<GitubUser>();
  const [isLoading, setIsLoading] = React.useState(true);

  const printRef = useRef<HTMLDivElement>(null);

  const cardScale = useMemo(() => {
    if (typeof window === 'undefined') return 1;

    const width = window.innerWidth >= 800 ? 800 : window.innerWidth;

    return width / 800;
  }, []);

  const handleDownloadImage = async () => {
    setIsPrinting(true);
    setTimeout(async () => {
      const element = printRef.current;
      if (!element || !user) return;

      const canvas = await html2canvas(element, {
        useCORS: true,
        scale: Math.round(800 / printRef.current.clientWidth) * 2,
      });

      const data = canvas.toDataURL('image/png');
      const link = document.createElement('a');

      if (typeof link.download === 'string') {
        link.href = data;
        link.download = `${slugify(user.name)}-frontendday.png`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(data);
      }
      setIsPrinting(false);
    }, 0);
  };

  useEffect(() => {
    getGithubUserData(userId).then((user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [userId]);

  if (isLoading) return <Loading isPage />;
  if (!userId || !user) return;

  return (
    <>
      <Header />
      <styled.button
        position='fixed'
        bottom='10px'
        right='calc(50% - 77px)'
        onClick={handleDownloadImage}
        bg='secondary'
        color='primary'
        borderRadius='100px'
        fontWeight='700'
        zIndex='5'
        px='4'
        py='2'
        cursor='pointer'
        _hover={{
          opacity: '.8',
        }}
      >
        baixar imagem
      </styled.button>
      <Flex
        justifyContent='center'
        alignItems='center'
        p='6'
        maxWidth='800px'
        width='100vw'
        height='auto'
        aspectRatio='1 / 1'
        mx='auto'
        ref={printRef}
        overflow='hidden'
        bgImage='url(/images/bg-page-card.png)'
        bgSize='cover'
      >
        <Box
          w='100%'
          maxW='400px'
          aspectRatio='2/3'
          bgImage='url(/images/bg-credential.png)'
          bgSize='cover'
          bgPosition='center'
          bgRepeat='no-repeat'
          borderRadius='10px'
          boxShadow={isPrinting ? 'none' : '0 0 10px rgba(0,0,0,.5)'}
          py='7'
          textAlign='center'
          color='white'
          style={{
            transform: `scale(${cardScale})`,
          }}
        >
          <Box
            w='20%'
            h='10px'
            borderRadius='10px'
            bg='primary'
            mt='-1.5'
            mx='auto'
          />
          <Flex h='100%' flexDir='column' justifyContent='space-between'>
            <Flex justifyContent='center' alignItems='center' flexDir='column'>
              <styled.img
                src='/logo-white.svg'
                alt='logo'
                width={150}
                height='auto'
                className={css({
                  mt: '4',
                  transition: 'all .3s ease-in-out',
                  _hover: {
                    transform: 'scale(1.03)',
                    opacity: '.8',
                  },
                })}
              />
              <Box>
                <Box
                  pos='relative'
                  p={['7', '10']}
                  maxWidth={['150px', '200px']}
                  mx='auto'
                  aspectRatio='1/1'
                  transition='all .3s ease-in-out'
                  _hover={{
                    transform: 'scale(1.03)',
                    opacity: '.8',
                  }}
                >
                  <styled.img
                    src={user.avatar_url}
                    alt={user.name}
                    borderRadius='50%'
                  />

                  <Box
                    pos='absolute'
                    w='100%'
                    h='100%'
                    left='0'
                    top='0'
                    animation='pulse 2s ease-in-out 0s infinite normal forwards'
                    bgImage="url('/images/image-effect.png')"
                    bgPosition={['0 5px', '0 6px']}
                    bgRepeat='no-repeat'
                    bgSize='100% 100%'
                  />
                </Box>
              </Box>
              <styled.h1
                color='tertiary'
                textTransform='uppercase'
                fontWeight='700'
                fontSize='2xl'
                mt={isPrinting ? '-6' : '-3'}
                mb={isPrinting ? '3' : '0'}
              >
                {user.name}
              </styled.h1>

              <Flex
                flexDir='column'
                bg='secondary'
                color='primary'
                my='2'
                pb={isPrinting ? '4' : '3'}
                pt='3'
                w='100%'
                textTransform='uppercase'
                letterSpacing='1.5px'
              >
                <div className={orbitron.className}>
                  <styled.span
                    top={isPrinting ? '-10px' : '0'}
                    display='block'
                    pos='relative'
                  >
                    Participante
                    <br />
                    <styled.span lineHeight='1' fontSize='4xl'>
                      Confirmad{article}
                    </styled.span>
                  </styled.span>
                </div>
              </Flex>
              <styled.p mt={isPrinting ? '0' : '1.5'}>
                <styled.span fontWeight='700'>14 OUT</styled.span> | Fortaleza
              </styled.p>
            </Flex>
            <HoverEffect>
              <styled.a
                display='block'
                mx='auto'
                color={'primary'}
                bg={'tertiary'}
                pt='7px'
                pb={isPrinting ? '15px' : '5px'}
                w='100%'
                maxWidth='250px'
                borderRadius='20px'
                href='https://frontendday.com.br'
                letterSpacing='1px'
                target='_blank'
                fontSize='sm'
              >
                <styled.span display='block' mt={isPrinting ? '-10px' : '0'}>
                  frontendday.com.br
                </styled.span>
              </styled.a>
            </HoverEffect>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default CardSection;
