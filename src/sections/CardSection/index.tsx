'use client';
import './style.css';
import { Box, Center, Flex, styled } from '@/styled-system/jsx';
import React, { useEffect, useMemo, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Orbitron } from 'next/font/google';
import { GitubUser, getGithubUserData } from '@/services/gh-user';
import HoverEffect from '@/components/HoverEffect';
import Loading from '@/components/Loading';
import Header from '@/components/Header';
import { captureException } from '@sentry/nextjs';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['800'] });

const slugify = (text: string) => {
  return text.replace(/\s+/g, '-').toLowerCase();
};

const ErrorScreen = () => (
  <Center minH='100vh'>
    <Box p='6' maxWidth='600px' width='100%' textAlign='center'>
      <styled.h2 fontWeight='700' mb='4' fontSize='2xl' color='white'>
        Ocorreu um erro ao carregar os dados do GitHub. Por favor, tente
        novamente
      </styled.h2>
      <styled.a
        href='/card'
        bg='secondary'
        color='primary'
        borderRadius='100px'
        fontWeight='700'
        px='4'
        py='2'
        cursor='pointer'
      >
        Voltar
      </styled.a>
    </Box>
  </Center>
);

type Props = {
  userId: string;
  article: string;
};

function downloadImage(canvas: HTMLCanvasElement, fileName: string) {
  const data = canvas.toDataURL('image/png');
  const link = document.createElement('a');

  if (typeof link.download === 'string') {
    link.href = data;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(data);
  }
}

const CardSection: React.FC<Props> = ({ userId, article }) => {
  const [isPrinting, setIsPrinting] = React.useState(false);
  const [user, setUser] = React.useState<GitubUser>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

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
      const fileName = `${slugify(user.name)}-frontendday.png`;

      if (navigator.share) {
        try {
          const blob = await new Promise((resolve) => {
            canvas.toBlob((b) => {
              resolve(b);
            }, 'image/png');
          });

          setIsPrinting(false);

          navigator.share({
            files: [
              new File([blob as BlobPart], fileName, { type: 'image/png' }),
            ],
          });
          return;
        } catch (error) {
          captureException(error, {
            extra: {
              message: 'Error on share image',
            },
          });
          downloadImage(canvas, fileName);
          setIsPrinting(false);
          return;
        }
      }

      downloadImage(canvas, fileName);
      setIsPrinting(false);
    }, 0);
  };

  useEffect(() => {
    getGithubUserData(userId)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [userId]);

  if (isError) return <ErrorScreen />;

  if (isLoading) return <Loading isPage />;

  if (!userId || !user) return;

  return (
    <>
      <Header />
      <Center position='fixed' bottom='30px' left='0' width='100%' zIndex='5'>
        <styled.button
          onClick={handleDownloadImage}
          bg='secondary'
          color='primary'
          borderRadius='100px'
          fontWeight='700'
          px='4'
          py='2'
          cursor='pointer'
          _hover={{
            opacity: '.8',
          }}
        >
          {isPrinting ? 'Gerando...' : 'Baixar imagem'}
        </styled.button>
      </Center>

      <Center mt={['5', '100px']} mb='5' p='4'>
        <styled.h1
          color='white'
          fontSize='2xl'
          fontWeight='700'
          textAlign='center'
        >
          Imagem gerada! Agora é só baixar e compartilhar nas redes sociais
        </styled.h1>
      </Center>
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
              <styled.img w='150px' mt='4' src='/logo-white.png' alt='logo' />
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
