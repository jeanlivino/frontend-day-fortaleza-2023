import { Box, Center, Flex, styled } from '@/styled-system/jsx';
import { DrawItem } from '@/types';
import React from 'react';
import NextImage from 'next/image';
import { css } from '@/styled-system/css';

type Props = {
  winners: DrawItem[];
};

type ButtonWrapperProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const ButtonWrapper = ({ children, onClick, disabled }: ButtonWrapperProps) => (
  <styled.button
    bg="white"
    p="4"
    borderRadius="4"
    boxShadow="0 0 4px 0 rgba(0, 0, 0, 0.1)"
    width="100%"
    maxWidth="300px"
    position="relative"
    textAlign="center"
    onClick={onClick}
    opacity={disabled ? '.1' : '1'}
    cursor={disabled ? 'not-allowed' : 'pointer'}
  >
    <styled.h2
      fontSize="4xl"
      fontWeight="bold"
      lineHeight="1"
      mb="4"
      textTransform="uppercase"
      color={disabled ? 'gray.400' : 'secondary'}
    >
      {children}
    </styled.h2>
  </styled.button>
);

const WinnersList: React.FC<Props> = ({ winners }) => {
  const [index, setIndex] = React.useState(0);
  const winner = winners[index];
  const downloadCSV = () => {
    const csv = winners.reduce((acc, { item, winner }) => {
      return `${acc}${item},${winner}\n`;
    }, 'Item,Ganhador\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resultado.csv';
    a.click();
  };

  const handleNext = () => {
    if (index + 1 < winners.length) {
      setIndex(index + 1);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <Center bg="primary" flexDir="column" minH="100vh">
      <NextImage
        src="/logo-vertical-white.svg"
        alt="logo"
        width={100}
        height={50}
        className={css({
          mx: 'auto',
          mb: '4',
          transition: 'all .3s ease-in-out',
          _hover: {
            transform: 'scale(1.03)',
            opacity: '.8',
          },
        })}
      />
      <Box
        bg="white"
        p="4"
        borderRadius="4"
        boxShadow="0 0 4px 0 rgba(0, 0, 0, 0.1)"
        width="100%"
        maxWidth="600px"
        position="relative"
        textAlign="center"
      >
        <styled.p fontSize="lg">Item:</styled.p>
        <styled.h2
          fontSize="4xl"
          fontWeight="bold"
          mb="4"
          textTransform="uppercase"
          color="primary"
        >
          {winner.item}
        </styled.h2>
        <styled.p fontSize="lg">Ganhador:</styled.p>
        <styled.h2
          fontSize="4xl"
          fontWeight="bold"
          mb="4"
          textTransform="uppercase"
          color="primary"
        >
          {winner.winner}
        </styled.h2>
      </Box>
      <Flex justifyContent="space-between" width="100%" maxWidth="600px">
        <ButtonWrapper disabled={index === 0} onClick={handlePrevious}>
          {'<'}
        </ButtonWrapper>
        <ButtonWrapper
          onClick={handleNext}
          disabled={index === winners.length - 1}
        >
          {'>'}
        </ButtonWrapper>
      </Flex>
      <styled.button
        p="4"
        width="100%"
        maxWidth="600px"
        color="white"
        cursor="pointer"
        onClick={downloadCSV}
      >
        Baixar CSV
      </styled.button>
    </Center>
  );
};

export default WinnersList;
