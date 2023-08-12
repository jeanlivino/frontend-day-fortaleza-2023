import { Box, styled } from '@/styled-system/jsx';
import React from 'react';
import NextImage from 'next/image';

interface Props {
  image: string;
  name: string;
  role: string;
  description: string;
}

const SpeakerCard: React.FC<Props> = ({ image, name, role, description }) => {
  const [firstName, lastName] = name.split(' ');

  return (
    <Box textAlign='center'>
      <Box
        bgImage="url('/images/image-effect.png')"
        bgPosition='0 6px'
        bgRepeat='no-repeat'
        bgSize='100% 100%'
        p='10'
        mb='-45px'
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
      <styled.h4
        fontSize='sm'
        fontWeight='bold'
        textTransform='uppercase'
        bg='secondary'
        color='primary'
        p='2'
        display='inline-block'
        position='relative'
        top='-.5rem'
      >
        {firstName} <styled.span fontWeight='400'>{lastName}</styled.span>
      </styled.h4>
      <styled.p fontSize='sm' color='secondary' textTransform='uppercase'>
        {role}
      </styled.p>
      <styled.p color='white' fontSize='12px' mt='2'>
        {description}
      </styled.p>
    </Box>
  );
};

export default SpeakerCard;
