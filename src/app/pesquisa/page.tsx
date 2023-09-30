import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import SurveySection from '@/sections/SurveySection';

import { getSiteData } from '@/services/site';
import { Box, styled } from '@/styled-system/jsx';
import { Metadata } from 'next';

export const revalidate = 60;

const title = 'Pesquisa Palestras do FrontEnd Day - Fortaleza 2023';
const description = 'Avalie as palestras do FrontEnd Day - Fortaleza 2023';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://frontendday.com.br/palestrantes',
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

export default async function Palestrantes() {
  const data = await getSiteData();
  return (
    <main>
      <Box bg="primary" px="10" pt={['5', '5', '24']} pb="4">
        <Header />
        <styled.h1
          textAlign="center"
          color="white"
          fontWeight="bold"
          fontSize={'3xl'}
        >
          Pesquisa
        </styled.h1>
      </Box>
      <Box bgColor="primary" position="relative" pb="10">
        <Container>
          <SurveySection talks={data.talks} />
        </Container>
      </Box>
      <Footer />
    </main>
  );
}
