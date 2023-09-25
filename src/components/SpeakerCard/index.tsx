import { Box, styled } from '@/styled-system/jsx';
import React from 'react';
import NextImage from 'next/image';
import SpeakerThumb from '../SpeakerThumb';
import { Speaker } from '@/types';

type Props = Speaker & {
  showBioOnMobile?: boolean;
};

const SpeakerCard: React.FC<Props> = ({
  image,
  title,
  role,
  bio,
  company,
  showBioOnMobile = false,
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
        tabIndex={0}
      >
        {firstName} <styled.span fontWeight='400'>{lastName}</styled.span>
      </styled.h4>
      <styled.p
        tabIndex={0}
        fontSize='sm'
        color='secondary'
        textTransform='uppercase'
      >
        {role} <styled.span fontWeight='bold'>{company}</styled.span>
      </styled.p>
      <styled.p
        color='white'
        fontSize='12px'
        mt='2'
        maxWidth={showBioOnMobile ? '400px' :'200px'}
        mx='auto'
        display={showBioOnMobile ? 'block' : ['none', 'block']}
        tabIndex={0}
      >
        {bio}
      </styled.p>
    </Box>
  );
};

export default SpeakerCard;
