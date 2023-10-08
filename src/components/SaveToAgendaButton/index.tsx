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
        <styled.span textAlign="ce" color="white">
          Salvo
        </styled.span>
      )}
      {!isSaved && (
        <styled.button cursor="pointer" color="white" onClick={onClick}>
          + salvar
        </styled.button>
      )}
    </Center>
  );
};

export default SaveToAgendaButton;
