import AboutSection from '@/sections/AboutSection';
import CountdownSection from '@/sections/CountdownSection';
import HeroSection from '@/sections/HeroSection';
import { Box } from '@/styled-system/jsx';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Box bg='secondary' position='relative' zIndex={1}>
        <CountdownSection />
        <AboutSection />
      </Box>
    </main>
  );
}
