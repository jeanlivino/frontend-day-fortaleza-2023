'use client';
import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Container from '@/components/Container';
import { Box, styled } from '@/styled-system/jsx';
import NextImage from 'next/image';

const ComunitysSection: React.FC = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 30,
    },
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 5, spacing: 30 },
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
      <Box position='relative' px='5px'>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide'>
            <NextImage
              src='/images/logo.png'
              width={200}
              height={200}
              alt='logo'
            />
          </div>
          <div className='keen-slider__slide'>
            <NextImage
              src='/images/logo.png'
              width={200}
              height={200}
              alt='logo'
            />
          </div>
          <div className='keen-slider__slide'>
            <NextImage
              src='/images/logo.png'
              width={200}
              height={200}
              alt='logo'
            />
          </div>
          <div className='keen-slider__slide'>
            <NextImage
              src='/images/logo.png'
              width={200}
              height={200}
              alt='logo'
            />
          </div>
          <div className='keen-slider__slide'>
            <NextImage
              src='/images/logo.png'
              width={200}
              height={200}
              alt='logo'
            />
          </div>
          <div className='keen-slider__slide'>
            <NextImage
              src='/images/logo.png'
              width={200}
              height={200}
              alt='logo'
            />
          </div>
          <div className='keen-slider__slide'>
            <NextImage
              src='/images/logo.png'
              width={200}
              height={200}
              alt='logo'
            />
          </div>
          <div className='keen-slider__slide'>
            <NextImage
              src='/images/logo.png'
              width={200}
              height={200}
              alt='logo'
            />
          </div>
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

export default ComunitysSection;

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
