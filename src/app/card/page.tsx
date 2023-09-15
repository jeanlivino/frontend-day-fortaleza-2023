import React from 'react';

import { Metadata } from 'next';
import CardForm from '@/components/CardForm';

export const metadata: Metadata = {
  title: 'Gerador de post de confirmação do FrontEnd Day - Fortaleza 2023',
  description:
    'Crie seu post personalizado com sua foto e publique nas suas redes sociais',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://frontendday.com.br',
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
