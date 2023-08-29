import Collapse from '@/components/Collapse';
import { Box, Container, Flex, styled } from '@/styled-system/jsx';
import { FAQItem } from '@/types';
import React from 'react';

interface Props {
  faq: FAQItem[];
}

const FAQSection: React.FC<Props> = ({ faq }) => {
  return (
    <Box pb='12'>
      <Container>
        <styled.h3
          color='primary.400'
          fontWeight='bold'
          fontSize='2xl'
          textAlign='center'
          py='10'
          textTransform='uppercase'
        >
          FAQ - Perguntas Frequentes
        </styled.h3>
        <Flex maxWidth='800px' mx='auto' flexDir='column' gap='1'>
          {faq?.map((item) => (
            <Collapse
              key={item.question}
              title={item.question}
              description={item.answer}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQSection;
