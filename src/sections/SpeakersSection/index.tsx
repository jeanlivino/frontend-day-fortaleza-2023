import Container from '@/components/Container';
import React from 'react';

import { Center, Grid, styled } from '@/styled-system/jsx';
import SpeakerCard from '@/components/SpeakerCard';
import { Speaker } from '@/types';
import Link from 'next/link';

type Props = {
  speakers: Speaker[];
};

const SpeakersSection: React.FC<Props> = ({ speakers }) => {
  const limitedSpeakers = speakers.slice(0, 12);

  return (
    <Container>
      <styled.h2
        textAlign='center'
        fontSize='2xl'
        fontWeight='bold'
        color='secondary'
        textTransform='uppercase'
      >
        Palestrantes <styled.span color='white'>Confirmados</styled.span>
      </styled.h2>
      <Grid
        gridTemplateColumns={['1fr', '1fr 1fr', 'repeat(4, 1fr)']}
        gridGap='4'
        pb='10'
      >
        {limitedSpeakers.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </Grid>
      <Center pb='20'>
        <styled.button
          color='primary'
          fontSize='sm'
          fontWeight='bold'
          textTransform='uppercase'
          bg='white'
          rounded='100px'
          px='5'
          py='1.5'
          cursor='pointer'
          _hover={{
            bg: 'secondary',
            color: 'primary',
          }}
        >
          <Link href='/palestrantes'>Ver todos os palestrantes</Link>
        </styled.button>
      </Center>
    </Container>
  );
};

export default SpeakersSection;
