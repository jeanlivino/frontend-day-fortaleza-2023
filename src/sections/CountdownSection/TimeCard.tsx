import { Box, styled } from '@/styled-system/jsx';
import React from 'react';

interface Props {
  number: number;
  text: string;
}

const TimeCard: React.FC<Props> = ({ number, text }) => {
  return (
    <Box
      bg='primary'
      p='3'
      rounded='10px'
      textAlign='center'
      textTransform='uppercase'
    >
      <styled.p color='secondary' fontWeight='700' fontSize='4xl'>
        {number < 0 ? '00' : number}
      </styled.p>
      <styled.p color='white' fontSize='12px'>
        {text}
      </styled.p>
    </Box>
  );
};

export default TimeCard;
