import Header from '@/components/Header';
import AgendaSection from '@/sections/AgendaSection';
import { getSiteData } from '@/services/site';
import { Box } from '@/styled-system/jsx';
export const revalidate = 60;

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
    </main>
  );
}
