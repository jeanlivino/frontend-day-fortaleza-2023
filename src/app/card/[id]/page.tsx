'use client';
import React from 'react';

import CardSection from '@/sections/CardSection';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string };
};

const CardPage: React.FC<Props> = ({ params: { id }, searchParams }) => {
  return <CardSection userId={id} article={searchParams.article} />;
};

export default CardPage;
