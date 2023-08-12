import AboutSection from '@/sections/AboutSection';
import CountdownSection from '@/sections/CountdownSection';
import HeroSection from '@/sections/HeroSection';
import SpeakersSection from '@/sections/SpeakersSection';
import ComunitysSection from '@/sections/ComunitysSection';
import VenueSection from '@/sections/VenueSection';
import { Box } from '@/styled-system/jsx';
import SponsorsSection from '@/sections/SponsorsSection';
import Container from '@/components/Container';
import TicketSection from '@/sections/TicketSection';

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
      <ComunitysSection />
    </main>
  );
}
