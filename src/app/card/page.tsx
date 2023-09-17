import React from 'react';

import { Metadata } from 'next';
import CardForm from '@/components/CardForm';

const title = 'Gerador de post de confirmação do FrontEnd Day - Fortaleza 2023';
const description =
  'Crie seu post personalizado com sua foto e publique nas suas redes sociais';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://frontendday.com.br/card',
    title,
    description,
    images: [
      {
        url: 'https://frontendday.descompliqueapps.com.br/wp-content/uploads/2023/08/banner-eventbrite-frontendday-1.png',
        alt: 'FrontEnd Day - Fortaleza 2023',
      },
    ],
  },
};

const CardFormPage: React.FC = () => {
  return <CardForm />;
};

export default CardFormPage;
