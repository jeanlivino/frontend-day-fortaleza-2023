import AboutSection from '@/sections/AboutSection';
import CountdownSection from '@/sections/CountdownSection';
import HeroSection from '@/sections/HeroSection';
import SpeakersSection from '@/sections/SpeakersSection';
import CommunitiesSection from '@/sections/CommunitiesSection';
import VenueSection from '@/sections/VenueSection';
import { Box, styled } from '@/styled-system/jsx';
import SponsorsSection from '@/sections/SponsorsSection';

import TicketSection from '@/sections/TicketSection';

import Footer from '@/components/Footer';
import { getSiteData } from '@/services/site';

export default async function Home() {
  const data = await getSiteData();
  return (
    <main>
      <HeroSection />
      <Box bg='secondary' position='relative' zIndex={2}>
        <CountdownSection />
        <AboutSection />
        <VenueSection />
      </Box>
      <Box
        bgImage="url('/images/banner_bg.png')"
        bgSize='cover'
        bgPosition='center'
        position='relative'
        pt='24'
        zIndex={1}
      >
        <SpeakersSection speakers={data.speakers} />
      </Box>
      {data.sponsors.length > 0 && <SponsorsSection sponsors={data.sponsors} />}
      <TicketSection />
      <Box
        bgImage="url('/images/banner_bg.png')"
        bgSize='cover'
        bgPosition='center'
        position='relative'
        pt='10'
        zIndex={1}
      >
        <styled.h3
          textAlign='center'
          color='white'
          fontSize='2xl'
          fontWeight='bold'
          textTransform='uppercase'
        >
          Programação
        </styled.h3>

        <styled.h4
          textAlign='center'
          color='white'
          fontSize='xl'
          textTransform='uppercase'
          mt='5'
          pb='10'
        >
          Em breve
        </styled.h4>
      </Box>
      <CommunitiesSection communities={data.communities} />
      <Footer />
    </main>
  );
}
