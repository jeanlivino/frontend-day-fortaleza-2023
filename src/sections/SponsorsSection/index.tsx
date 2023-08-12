'use client';
import React from 'react';
import Container from '@/components/Container';
import { Grid, styled } from '@/styled-system/jsx';
import NextImage from 'next/image';

const SponsorsSection: React.FC = () => {
  return (
    <Container>
      <styled.h3
        color='primary.400'
        fontWeight='bold'
        fontSize='2xl'
        textAlign='center'
        py='10'
        textTransform='uppercase'
      >
        Patrocinadores
      </styled.h3>
      <Grid gridTemplateColumns={['repeat(2, 1fr)', 'repeat(5, 1fr)']} gap={4}>
        <NextImage src='/images/logo.png' width={200} height={200} alt='logo' />
        <NextImage src='/images/logo.png' width={200} height={200} alt='logo' />
        <NextImage src='/images/logo.png' width={200} height={200} alt='logo' />
        <NextImage src='/images/logo.png' width={200} height={200} alt='logo' />
        <NextImage src='/images/logo.png' width={200} height={200} alt='logo' />
        <NextImage src='/images/logo.png' width={200} height={200} alt='logo' />
        <NextImage src='/images/logo.png' width={200} height={200} alt='logo' />
        <NextImage src='/images/logo.png' width={200} height={200} alt='logo' />
      </Grid>
    </Container>
  );
};

export default SponsorsSection;
