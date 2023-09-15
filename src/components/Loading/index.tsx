import { Center, Box } from '@/styled-system/jsx';
import React from 'react';

type Props = {
  isPage?: boolean;
  dark?: boolean;
};

const Loading: React.FC<Props> = ({ isPage, dark }) => {
  return (
    <Center display='flex' height={isPage ? 'calc(100vh - 100px)' : 'auto'}>
      <Box
        content=''
        display='block'
        width='3rem'
        height='3rem'
        style={{
          border: `4px solid ${dark ? '#000' : '#fff'}`,
          borderBottomColor: 'transparent',
        }}
        borderRadius='50%'
        animation='spin 1s linear infinite'
      />
    </Center>
  );
};

export default Loading;
