import React from 'react';
import { Center, styled } from '@/styled-system/jsx';

type Props = {
  isSaved: boolean;
  onClick: () => void;
};

const SaveToAgendaButton: React.FC<Props> = ({ isSaved, onClick }) => {
  return (
    <Center>
      {isSaved && (
        <styled.span py='2' textAlign='ce' color='white' fontWeight='500'>
          Salvo
        </styled.span>
      )}
      {!isSaved && (
        <styled.button
          py='2'
          px='4'
          border='1px solid white'
          borderRadius='100px'
          cursor='pointer'
          color='white'
          onClick={onClick}
          w='100%'
          _hover={{
            opacity: 0.8,
          }}
        >
          + salvar
        </styled.button>
      )}
    </Center>
  );
};

export default SaveToAgendaButton;
