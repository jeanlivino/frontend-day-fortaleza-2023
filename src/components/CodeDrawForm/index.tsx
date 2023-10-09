'use client';
import { Center, styled } from '@/styled-system/jsx';
import { Knockout } from '@/types';
import React from 'react';

type Props = {
  onDraw: (result: Knockout[]) => void;
};

const textToItems = (text: string) => {
  return text.split('\n').filter((item) => item);
};

const knockouts = ['Bateria 1', 'Bateria 2', 'Bateria 3', 'Bateria 4'];

const draw = (contestants: string[]) => {
  let contestantsList = [...contestants];
  const itemsLength = knockouts.length;
  const result: Knockout[] = [];

  for (let i = 0; i < itemsLength; i++) {
    const contestantsLength = contestantsList.length;
    const knockout = knockouts[i];

    // get 4 participants randomly
    const knockoutsParticipants = [];

    for (let j = 0; j < 4; j++) {
      const participantIndex = Math.floor(Math.random() * contestantsLength);
      contestantsList = contestantsList.filter(
        (_, index) => index !== participantIndex
      );

      knockoutsParticipants.push(contestantsList[participantIndex]);
    }

    result.push({ knockout, participants: knockoutsParticipants });
  }

  return result;
};

const CodeDrawForm: React.FC<Props> = ({ onDraw }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const contestants = textToItems(formData.get('contestants') as string);

    const result = draw(contestants);

    onDraw(result);
  };

  return (
    <Center bg='primary' p='4'>
      <styled.form
        onSubmit={handleSubmit}
        maxW='800px'
        w='100%'
        mx='auto'
        border='1px solid white'
        p='4'
        borderRadius='10px'
        bg='#f1f1f1'
      >
        <styled.label>Lista de competidores</styled.label>
        <styled.textarea
          name='contestants'
          mt='2'
          p='2'
          w='100%'
          borderRadius='10px'
          rows={10}
        />

        <styled.button
          type='submit'
          mt='4'
          p='2'
          w='100%'
          borderRadius='10px'
          bg='primary'
          color='white'
          fontWeight='bold'
          cursor='pointer'
          _hover={{ bg: 'primary.900' }}
        >
          Sortear
        </styled.button>
      </styled.form>
    </Center>
  );
};

export default CodeDrawForm;
