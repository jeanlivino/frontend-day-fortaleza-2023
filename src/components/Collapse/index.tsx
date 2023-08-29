'use client';
import React from 'react';
import { Box, Flex, styled } from '@/styled-system/jsx';

interface Props {
  title: string;
  description: string;
}

const Collapse: React.FC<Props> = ({ title, description }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box>
      <styled.button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`collapse-${title}`}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        bg='primary.400'
        color='white'
        cursor='pointer'
        fontWeight='bold'
        px='4'
        py='2'
      >
        <styled.h4>{title}</styled.h4>
        <styled.span aria-hidden='true'>{isOpen ? '−' : '+'}</styled.span>
      </styled.button>

      <styled.div
        id={`collapse-${title}`}
        aria-hidden={!isOpen}
        background='primary.50'
        maxH={isOpen ? '300px' : '0'}
        opacity={isOpen ? '1' : '0'}
        overflow='hidden'
        transition='all .6s ease-in-out'
      >
        <Box p='4'>{description}</Box>
      </styled.div>
    </Box>
  );
};

export default Collapse;
