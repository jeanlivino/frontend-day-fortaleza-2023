import AboutSection from '@/sections/AboutSection';
import CountdownSection from '@/sections/CountdownSection';
import HeroSection from '@/sections/HeroSection';
import VenueSection from '@/sections/VenueSection';
import { Box } from '@/styled-system/jsx';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Box bg='secondary' position='relative' zIndex={2}>
        <CountdownSection />
        <AboutSection />
        <VenueSection />
      </Box>
      <Box bg='primary' position='relative' height='200px' zIndex={1}></Box>
    </main>
  );
}
