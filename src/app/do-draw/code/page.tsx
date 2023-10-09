'use client';
import CodeDrawForm from '@/components/CodeDrawForm';
import WinnersList from '@/components/WinnersList';
import { Center } from '@/styled-system/jsx';
import { Knockout } from '@/types';
import React from 'react';

const CodeDrawPage: React.FC = () => {
  const [knockouts, setKnockouts] = React.useState<Knockout[]>([]);
  const [playVideo, setPlayVideo] = React.useState<boolean>(false);

  const handleOnDraw = (knockouts: Knockout[]) => {
    setKnockouts(knockouts);
    setPlayVideo(true);
  };

  if (playVideo)
    return (
      <Center bg='primary' minH='100vh'>
        <video
          autoPlay
          muted
          onEnded={() => setPlayVideo(false)}
          style={{ width: '100%', height: 'auto' }}
        >
          <source src='/countdown.mp4' type='video/mp4' />
        </video>
      </Center>
    );

  if (knockouts.length > 0)
    return (
      <WinnersList
        itemTitle='Bateria'
        winnerTitle='Competidores'
        maxWidth='800px'
        winners={knockouts.map((knockout) => ({
          item: knockout.knockout,
          winner: knockout.participants.join('<hr/>'),
        }))}
      />
    );

  return <CodeDrawForm onDraw={handleOnDraw} />;
};

export default CodeDrawPage;
