import { Box, styled } from '@/styled-system/jsx';
import React from 'react';

interface Props {
  number: number;
  text: string;
}

const TimeCard: React.FC<Props> = ({ number, text }) => {
  return (
    <Box
      p='3'
      rounded='10px'
      textAlign='center'
      textTransform='uppercase'
      backgroundImage='linear-gradient(to right, #8c5bf1, #9252e6, #9849db, #9c3fcf, #9f35c4)'
      boxShadow='0px 18px 35px -8px rgba(0,0,0,0.5)'
    >
      <styled.p color='white' fontWeight='700' fontSize='5xl'>
        {number < 0 ? '00' : number}
      </styled.p>
      <styled.p color='white' fontSize='24px'>
        {text}
      </styled.p>
    </Box>
  );
};

export default TimeCard;
