import { Box } from '@/styled-system/jsx';
import React from 'react';

const Container: React.FC<{ children: React.ReactNode; px?: string }> = ({
  children,
  px,
}) => {
  return (
    <Box maxWidth='1043px' mx='auto' px={px || 7}>
      {children}
    </Box>
  );
};

export default Container;
