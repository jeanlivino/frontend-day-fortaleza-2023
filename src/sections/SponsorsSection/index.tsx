'use client';
import React from 'react';
import Container from '@/components/Container';
import { Flex, Grid, styled } from '@/styled-system/jsx';
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
      <Flex gap={4} mb='10' justifyContent='center'>
        {sponsors.map((sponsor) => (
          <styled.a href={sponsor.link} key={sponsor.name}>
            <NextImage
              src={sponsor.image}
              width={200}
              height={200}
              alt={sponsor.name}
              style={{
                width: '150px',
                objectFit: 'contain',
                aspectRatio: ' 4/3',
              }}
            />
          </styled.a>
        ))}
      </Flex>
    </Container>
  );
};

export default SponsorsSection;
