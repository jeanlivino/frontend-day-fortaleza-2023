import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SpeakerInfo from '@/components/SpeakerInfo';

import { getSiteData } from '@/services/site';
import { Box, Grid, styled } from '@/styled-system/jsx';

export const revalidate = 60;

export default async function Palestrantes() {
  const data = await getSiteData();
  return (
    <main>
      <Box bg='primary' px='10' pt={['5', '5', '24']} pb='4'>
        <Header />
        <Container>
          <styled.h1 color='white' fontWeight='bold' fontSize={'3xl'}>
            Palestrantes
          </styled.h1>
        </Container>
      </Box>
      <Box bgColor='primary' position='relative' pb='10'>
        <Container>
          <Grid gridTemplateColumns={['1fr', '1fr', '1fr 1fr']} gap='4'>
            {data.speakers.map((speaker) => (
              <SpeakerInfo key={speaker.id} {...speaker} />
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </main>
  );
}
