import AboutSection from '@/sections/AboutSection';
import HeroSection from '@/sections/HeroSection';
import SpeakersSection from '@/sections/SpeakersSection';
import CommunitiesSection from '@/sections/CommunitiesSection';
import VenueSection from '@/sections/VenueSection';
import { Box, styled } from '@/styled-system/jsx';
import SponsorsSection from '@/sections/SponsorsSection';

import TicketSection from '@/sections/TicketSection';

import { getSiteData } from '@/services/site';
import CountdownSection from '@/sections/CountdownSection';
import AgendaSection from '@/sections/AgendaSection';

export const revalidate = 60;

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
        bgColor='primary'
        bgImage="url('/images/banner_bg.png')"
        bgSize='cover'
        bgPosition='center'
        position='relative'
        pt='24'
        zIndex={1}
      >
        <SpeakersSection speakers={data.speakers} />
      </Box>
      {data.sponsors?.length > 0 && (
        <SponsorsSection sponsors={data.sponsors} />
      )}
      <TicketSection />
      <AgendaSection
        talks={data.talks}
        isActive={
          Boolean(data.activate_agenda) ||
          process.env.NODE_ENV === 'development'
        }
      />
      <CommunitiesSection communities={data.communities} />
    </main>
  );
}
