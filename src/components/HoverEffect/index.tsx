import React from 'react';
import { styled } from '@/styled-system/jsx';

const HoverEffect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <styled.div
      transition='all 0.3s ease-in-out'
      _hover={{
        transform: 'scale(1.1)',
        opacity: 0.8,
      }}
    >
      {children}
    </styled.div>
  );
};

export default HoverEffect;
