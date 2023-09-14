import { Center, Box } from '@/styled-system/jsx';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <Center display='flex' h='100vh'>
      <Box
        content=''
        display='block'
        width='3rem'
        height='3rem'
        border='0.25em solid white'
        borderBottomColor='transparent'
        borderRadius='50%'
        animation='spin 1s linear infinite'
      />
    </Center>
  );
};

export default Loading;
