import Container from '@/components/Container';
import { Box, Flex, Grid, styled } from '@/styled-system/jsx';
import React from 'react';

const Hour: React.FC<{ hour: string }> = ({ hour }) => {
  return (
    <styled.p
      alignSelf='center'
      color='secondary'
      fontSize='md'
      fontWeight='bold'
      textAlign='center'
    >
      {hour}
    </styled.p>
  );
};

const Featured: React.FC<{ text: string }> = ({ text }) => {
  return (
    <styled.p
      color='primary'
      bg='secondary'
      w='100%'
      rounded='100px'
      fontSize='sm'
      fontWeight='bold'
      px='4'
      py='3'
      textTransform='uppercase'
    >
      {text}
    </styled.p>
  );
};

const AgendaSection: React.FC = () => {
  return (
    <Box
      bgColor='primary'
      bgImage="url('/images/banner_bg.png')"
      bgSize='cover'
      bgPosition='center'
      position='relative'
      pt='10'
      pb='20'
      zIndex={1}
    >
      <Container>
        <styled.h3
          textAlign='center'
          color='white'
          fontSize='2xl'
          fontWeight='bold'
          textTransform='uppercase'
          mb='7'
        >
          Programação
        </styled.h3>
        <Grid gridTemplateColumns='90px auto'>
          <Hour hour='08:00' />
          <Featured text='Credenciamento' />
        </Grid>
      </Container>
    </Box>
  );
};

export default AgendaSection;
