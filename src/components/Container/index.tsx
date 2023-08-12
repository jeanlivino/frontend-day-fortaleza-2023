import { Box } from '@/styled-system/jsx';
import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box maxWidth='1043px' mx='auto' px='10'>
      {children}
    </Box>
  );
};

export default Container;
