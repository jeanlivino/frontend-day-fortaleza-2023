import React from 'react';

import { getGithubUserData } from '@/services/gh-user';
import CardSection from '@/sections/CardSection';

type Props = {
  params: { id: string };
};

const CardPage: React.FC<Props> = async ({ params: { id } }) => {
  const user = await getGithubUserData(id);

  return <CardSection user={user} />;
};

export default CardPage;
