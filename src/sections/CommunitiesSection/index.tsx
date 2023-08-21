'use client';
import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Container from '@/components/Container';
import { Box, styled } from '@/styled-system/jsx';
import NextImage from 'next/image';
import { Community } from '@/types';
import { css } from '@/styled-system/css';

type Props = {
  communities: Community[];
};

const CommunitiesSection: React.FC<Props> = ({ communities }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 30,
    },
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 'auto', spacing: 20 },
      },
    },
    loop: true,
  });

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
        Comunidades Parceiras
      </styled.h3>
      <Box position='relative' px='5px' mb='10'>
        <div ref={sliderRef} className='keen-slider'>
          {communities.map((community) => (
            <div
              className='keen-slider__slide'
              key={community.id}
              style={{ maxWidth: '150px' }}
            >
              <styled.a
                href={community.link}
                target='_blank'
                h='80px'
                aspectRatio='4/3'
              >
                <NextImage
                  src={community.image}
                  width={200}
                  height={200}
                  alt={community.title}
                  className={css({
                    height: '80px',
                    aspectRatio: '4/3',
                    objectFit: 'contain',
                  })}
                />
              </styled.a>
            </div>
          ))}
        </div>
        <Arrow
          left
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        />

        <Arrow
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        />
      </Box>
    </Container>
  );
};

export default CommunitiesSection;

function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
  const positionProps = props.left ? { left: '-25px' } : { right: '-25px' };
  return (
    <styled.svg
      w='20px'
      h='20px'
      top='50%'
      transform='translateY(-50%)'
      position='absolute'
      bg='secondary'
      p='5px'
      borderRadius='50%'
      fill='white'
      cursor='pointer'
      {...positionProps}
      onClick={props.onClick}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </styled.svg>
  );
}
