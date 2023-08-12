import { Box, styled } from '@/styled-system/jsx';
import React from 'react';
import NextImage from 'next/image';

interface Props {
  image: string;
  name: string;
  mb?: string;
}

const SpeakerThumb: React.FC<Props> = ({ image, name, mb }) => {
  return (
    <Box>
      <Box
        bgImage="url('/images/image-effect.png')"
        bgPosition='0 6px'
        bgRepeat='no-repeat'
        bgSize='100% 100%'
        p='10'
        mb={mb}
        maxWidth='200px'
        mx='auto'
        aspectRatio='1/1'
        transition='all .3s ease-in-out'
        _hover={{
          transform: 'scale(1.03)',
          opacity: '.8',
        }}
      >
        <NextImage
          src={image}
          width={200}
          height={200}
          alt={name}
          style={{
            borderRadius: '50%',
            aspectRatio: '1/1',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );
};

export default SpeakerThumb;
