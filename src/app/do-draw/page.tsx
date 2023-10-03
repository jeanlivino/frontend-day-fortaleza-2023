'use client';
import DoDrawForm from '@/components/DoDrawForm';
import { Box, Center, styled } from '@/styled-system/jsx';
import { DrawItem } from '@/types';
import React from 'react';

const DoDrawPage: React.FC = () => {
  const [winners, setWinners] = React.useState<DrawItem[]>([]);

  return <DoDrawForm onDraw={setWinners} />;
};

export default DoDrawPage;
