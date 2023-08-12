import AboutSection from '@/sections/AboutSection';
import CountdownSection from '@/sections/CountdownSection';
import HeroSection from '@/sections/HeroSection';
import SpeakersSection from '@/sections/SpeakersSection';
import ComunitysSection from '@/sections/ComunitysSection';
import VenueSection from '@/sections/VenueSection';
import { Box, styled } from '@/styled-system/jsx';
import SponsorsSection from '@/sections/SponsorsSection';
import Contaier from '@/components/Container';
import TicketSection from '@/sections/TicketSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
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
        <SpeakersSection />
      </Box>
      <SponsorsSection />
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
      <ComunitysSection />
      <Footer />
    </main>
  );
}
