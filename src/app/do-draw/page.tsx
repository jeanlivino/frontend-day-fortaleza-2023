'use client';
import DoDrawForm from '@/components/DoDrawForm';
import WinnersList from '@/components/WinnersList';
import { Box, Center, styled } from '@/styled-system/jsx';
import { DrawItem } from '@/types';
import React from 'react';

const DoDrawPage: React.FC = () => {
  const [winners, setWinners] = React.useState<DrawItem[]>([]);
  const [playVideo, setPlayVideo] = React.useState<boolean>(false);

  const handleOnDraw = (winners: DrawItem[]) => {
    setWinners(winners);
    setPlayVideo(true);
  };

  if (playVideo)
    return (
      <Center bg="primary" minH="100vh">
        <video
          autoPlay
          muted
          onEnded={() => setPlayVideo(false)}
          style={{ width: '100%', height: 'auto' }}
        >
          <source src="/countdown.mp4" type="video/mp4" />
        </video>
      </Center>
    );

  if (winners.length > 0) return <WinnersList winners={winners} />;

  return <DoDrawForm onDraw={handleOnDraw} />;
};

export default DoDrawPage;
