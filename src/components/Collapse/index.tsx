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
    <details>
      <styled.summary
        onClick={() => setIsOpen(!isOpen)}
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
      </styled.summary>

      <Box
        background='primary.50'
        p='4'
        tabIndex={0}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </details>
  );
};

export default Collapse;
