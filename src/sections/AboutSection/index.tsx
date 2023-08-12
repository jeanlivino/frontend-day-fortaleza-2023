import Container from '@/components/Container';
import { Box, Grid, styled } from '@/styled-system/jsx';
import React from 'react';

const eventData = [
  {
    title: '+10 HORAS DE EVENTO',
    description: 'palestras de diversos temas',
  },
  {
    title: '270 pessoas',
    description: 'participantes, palestrantes e convidados',
  },
  {
    title: "2h codando no 'breu'",
    description: 'adaptação do code in the dark',
  },
  {
    title: 'networking ilimitado',
    description: 'conexão com pessoas e empresas',
  },
  {
    title: '+30 palestras',
    description:
      'conteúdos sobre front end, back end, carreira empreendedorismo e mais.',
  },
  {
    title: 'COMUNIDADES',
    description: 'encontro das comunidades de tecnologia do Ceará',
  },
];

const AboutSection: React.FC = () => {
  return (
    <Container>
      <Grid gridTemplateColumns={['1fr', '1fr 1fr']} gridGap='4'>
        {eventData.map((event) => (
          <Box key={event.title}>
            <styled.h3
              textTransform='uppercase'
              fontSize='2xl'
              color='white'
              fontWeight='700'
            >
              {event.title}
            </styled.h3>
            <styled.p fontSize='md'>{event.description}</styled.p>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutSection;
