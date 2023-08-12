'use client';
import React from 'react';
import Container from '@/components/Container';
import { Grid, styled } from '@/styled-system/jsx';
import NextImage from 'next/image';
import { Sponsor } from '@/types';

type Props = {
  sponsors: Sponsor[];
};

const SponsorsSection: React.FC<Props> = ({ sponsors }) => {
  return (
    <Container>
      <styled.h3
        color='primary.400'
        fontWeight='bold'
        fontSize='2xl'
        textAlign='center'
        pt='10'
        textTransform='uppercase'
      >
        Patrocinadores
      </styled.h3>
      <Grid
        gridTemplateColumns={['repeat(2, 1fr)', 'repeat(5, 1fr)']}
        gap={4}
        mb='10'
      >
        {sponsors.map((sponsor) => (
          <styled.a href={sponsor.link} key={sponsor.name}>
            <NextImage
              src={sponsor.image}
              width={200}
              height={200}
              alt={sponsor.name}
            />
          </styled.a>
        ))}
      </Grid>
    </Container>
  );
};

export default SponsorsSection;
