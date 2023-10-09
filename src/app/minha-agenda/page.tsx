import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MyAgendaList from '@/components/MyAgendaList';
import SpeakerModal from '@/components/SpeakerModal';
import { getSiteData } from '@/services/site';
import { Box, styled } from '@/styled-system/jsx';
import { Metadata } from 'next';

const title = 'Sua agenda no FrontEnd Day - Fortaleza 2023';
const description =
  'Acesse sua agenda de palestras do FrontEnd Day - Fortaleza 2023 e não perca nenhuma palestra';

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

export default async function MinhaAgenda() {
  const data = await getSiteData();

  return (
    <main>
      <Box bg='primary' px='10' pt={['5', '5', '24']} pb='4'>
        <Header />
      </Box>

      <Box bgColor='primary' position='relative' pt='10' pb='10' zIndex={1}>
        <Container>
          <styled.h3
            textAlign='center'
            color='white'
            fontSize='2xl'
            fontWeight='bold'
            textTransform='uppercase'
            mb='7'
          >
            Minha agenda
          </styled.h3>

          <MyAgendaList talks={data.talks} />
        </Container>
      </Box>

      <SpeakerModal />
      <Footer />
    </main>
  );
}
