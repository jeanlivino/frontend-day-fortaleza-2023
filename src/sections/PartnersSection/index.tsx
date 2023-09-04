'use client';
import React from 'react';
import Container from '@/components/Container';
import { Flex, Grid, styled } from '@/styled-system/jsx';
import NextImage from 'next/image';
import { Sponsor } from '@/types';
import HoverEffect from '@/components/HoverEffect';

type Props = {
  partners: Sponsor[];
};

const PartnersSection: React.FC<Props> = ({ partners }) => {
  return (
    <Container>
      <styled.h3
        color='primary.400'
        fontWeight='bold'
        fontSize='2xl'
        textAlign='center'
        pt='5'
        textTransform='uppercase'
      >
        Apoiadores
      </styled.h3>
      <Flex gap={4} my='10' justifyContent='center'>
        {partners.map((partner) => (
          <styled.a href={partner.link} key={partner.name}>
            <HoverEffect>
              <NextImage
                src={partner.image}
                width={200}
                height={200}
                alt={partner.name}
                style={{
                  width: '110px',
                  objectFit: 'contain',
                  aspectRatio: ' 4/3',
                }}
              />
            </HoverEffect>
          </styled.a>
        ))}
      </Flex>
    </Container>
  );
};

export default PartnersSection;
