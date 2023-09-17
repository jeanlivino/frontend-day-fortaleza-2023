import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SpeakerModal from '@/components/SpeakerModal';
import AgendaSection from '@/sections/AgendaSection';
import { getSiteData } from '@/services/site';
import { Box } from '@/styled-system/jsx';
import { Metadata } from 'next';
export const revalidate = 60;

const title = 'Agenda de palestras do FrontEnd Day - Fortaleza 2023';
const description =
  'Confira a agenda de palestras do FrontEnd Day - Fortaleza 2023 e não perca nenhuma palestra';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://frontendday.com.br/agenda',
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

export default async function Programacao() {
  const data = await getSiteData();
  return (
    <main>
      <Box bg='primary' px='10' pt={['5', '5', '24']} pb='4'>
        <Header />
      </Box>
      <AgendaSection
        talks={data.talks}
        isActive={
          Boolean(data.activate_agenda) ||
          process.env.NODE_ENV === 'development'
        }
      />
      <SpeakerModal />
      <Footer />
    </main>
  );
}
