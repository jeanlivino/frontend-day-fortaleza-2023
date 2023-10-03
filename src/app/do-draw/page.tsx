'use client';
import DoDrawForm from '@/components/DoDrawForm';
import WinnersList from '@/components/WinnersList';
import { Box, Center, styled } from '@/styled-system/jsx';
import { DrawItem } from '@/types';
import React from 'react';

const DoDrawPage: React.FC = () => {
  const [winners, setWinners] = React.useState<DrawItem[]>([]);

  if (winners.length > 0) return <WinnersList winners={winners} />;

  return <DoDrawForm onDraw={setWinners} />;
};

export default DoDrawPage;
