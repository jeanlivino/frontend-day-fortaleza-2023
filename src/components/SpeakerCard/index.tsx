import { Box, styled } from '@/styled-system/jsx';
import React from 'react';
import NextImage from 'next/image';
import SpeakerThumb from '../SpeakerThumb';
import { Speaker } from '@/types';

const SpeakerCard: React.FC<Speaker> = ({
  image,
  title,
  role,
  bio,
  company,
}) => {
  const [firstName, lastName] = title.split(' ');

  return (
    <Box textAlign='center'>
      <SpeakerThumb mb='-45px' image={image} name={title} />
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
        {role} <styled.span fontWeight='bold'>{company}</styled.span>
      </styled.p>
      <styled.p color='white' fontSize='12px' mt='2' maxWidth='200px' mx='auto'>
        {bio}
      </styled.p>
    </Box>
  );
};

export default SpeakerCard;
