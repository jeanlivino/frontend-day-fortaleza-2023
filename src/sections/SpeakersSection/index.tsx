import Container from '@/components/Container';
import React from 'react';

import { Grid, styled } from '@/styled-system/jsx';
import SpeakerCard from '@/components/SpeakerCard';
import { Speaker } from '@/types';

type Props = {
  speakers: Speaker[];
};

const SpeakersSection: React.FC<Props> = ({ speakers }) => {
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
        pb='20'
      >
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </Grid>
    </Container>
  );
};

export default SpeakersSection;
