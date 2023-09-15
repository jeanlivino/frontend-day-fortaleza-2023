'use client';
import { Box, Flex, styled, Grid, Center } from '@/styled-system/jsx';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import NextImage from 'next/image';
import { css } from '@/styled-system/css';
import Header from '@/components/Header';
import Loading from '@/components/Loading';

const articleByGender = {
  male: 'o',
  female: 'a',
} as const;

const Label = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) => (
  <styled.label
    htmlFor={htmlFor}
    fontSize='md'
    fontWeight='bold'
    mb='2'
    display='block'
  >
    {children}
  </styled.label>
);

const Input = ({
  id,
  value,
  required,
  onChange,
}: {
  id: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <styled.input
    type='text'
    id={id}
    value={value}
    onChange={onChange}
    p='1'
    border='1px solid #ccc'
    borderRadius='5px'
    w='100%'
  />
);

const CardFormPage: React.FC = () => {
  const [githubUser, setGithubUser] = useState('');
  const [gender, setGender] = useState('');
  const [pronoun, setPronoun] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const router = useRouter();

  const isOtherGender = gender === 'other';
  const isButtonDisabled =
    !githubUser || !gender || (isOtherGender && !pronoun);

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value;

    setGender(selectedGender);

    if (selectedGender !== 'other') {
      setPronoun('');
      return;
    }
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsRedirecting(true);

    const article = isOtherGender
      ? pronoun
      : articleByGender[gender as keyof typeof articleByGender];

    const p = new URLSearchParams();
    p.append('article', article);

    router.push(`/card/${githubUser}?${p.toString()}`);
  }

  return (
    <Flex
      bg='primary'
      p='4'
      justifyContent='center'
      alignItems='center'
      minH='90vh'
      flexDir={['column', 'column', 'row']}
    >
      <Header />
      <Box
        mt={['0', '96px']}
        maxW='800px'
        border='1px solid white'
        p='4'
        borderRadius='10px'
        bg='#f1f1f1'
      >
        <NextImage
          src='/logo-vertical.svg'
          alt='logo'
          width={100}
          height={50}
          className={css({
            mx: 'auto',
            mb: '4',
            transition: 'all .3s ease-in-out',
            _hover: {
              transform: 'scale(1.03)',
              opacity: '.8',
            },
          })}
        />
        <styled.h1 fontWeight='bold' fontSize='xl' mb='4' textAlign='center'>
          Preencha o formulário para gerar sua imagem de confirmação
          personalizada
        </styled.h1>
        <form onSubmit={handleSubmit}>
          <Grid
            gap='4'
            display={['flex', 'flex', 'grid']}
            flexDir='column'
            style={{
              gridTemplateColumns: isOtherGender ? '1fr 1fr 1fr' : '1fr 1fr',
            }}
          >
            <div>
              <Label htmlFor='githubUser'>Usuário do GitHub:</Label>
              <Input
                id='githubUser'
                required
                value={githubUser}
                onChange={(e) => setGithubUser(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor='gender'>Gênero:</Label>
              <styled.select
                id='gender'
                value={gender}
                onChange={handleGenderChange}
                p='1'
                border='1px solid #ccc'
                borderRadius='5px'
                w='100%'
              >
                <option value=''>Selecione o gênero</option>
                <option value='male'>Masculino</option>
                <option value='female'>Feminino</option>
                <option value='other'>Outro</option>
              </styled.select>
            </div>
            {isOtherGender && (
              <div>
                <Label htmlFor='pronoun'>Artigo: </Label>

                <Input
                  id='pronoun'
                  value={pronoun}
                  onChange={(e) => setPronoun(e.target.value)}
                />
              </div>
            )}
          </Grid>
          <Center mt='4'>
            {!isRedirecting && (
              <styled.button
                mt='4'
                bg='primary'
                color='secondary'
                borderRadius='100px'
                fontWeight='700'
                zIndex='5'
                px='4'
                py='2'
                opacity={isButtonDisabled ? '.5' : '1'}
                cursor={isButtonDisabled ? 'not-allowed' : 'pointer'}
                disabled={isButtonDisabled}
                type='submit'
              >
                Gerar imagem
              </styled.button>
            )}

            {isRedirecting && <Loading dark />}
          </Center>
        </form>
      </Box>
    </Flex>
  );
};

export default CardFormPage;
