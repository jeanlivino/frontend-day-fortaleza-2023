import React from 'react';

import { getGithubUserData } from '@/services/gh-user';
import CardSection from '@/sections/CardSection';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string };
};

const CardPage: React.FC<Props> = async ({ params: { id }, searchParams }) => {
  return <CardSection userId={id} article={searchParams.article} />;
};

export default CardPage;
