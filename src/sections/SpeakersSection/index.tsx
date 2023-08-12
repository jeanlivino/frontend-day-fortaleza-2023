import Container from '@/components/Container';
import React from 'react';

import { Grid, styled } from '@/styled-system/jsx';
import SpeakerCard from '@/components/SpeakerCard';

const SpeakersSection: React.FC = () => {
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
      <Grid gridTemplateColumns='repeat(4, 1fr)' gridGap='4' pb='20'>
        <SpeakerCard
          image='/images/speaker.png'
          name='Ingryd Oliva'
          role='Cargo do Palestrante'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.'
        />
        <SpeakerCard
          image='/images/speaker.png'
          name='Nome Palestrantewasda'
          role='Cargo do Palestrante'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.'
        />
        <SpeakerCard
          image='/images/speaker.png'
          name='Nome Palestrantewasda'
          role='Cargo do Palestrante'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.'
        />
        <SpeakerCard
          image='/images/speaker.png'
          name='Nome Palestrantewasda'
          role='Cargo do Palestrante'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.'
        />
        <SpeakerCard
          image='/images/speaker.png'
          name='Nome Palestrantewasda'
          role='Cargo do Palestrante'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam.'
        />
      </Grid>
    </Container>
  );
};

export default SpeakersSection;
