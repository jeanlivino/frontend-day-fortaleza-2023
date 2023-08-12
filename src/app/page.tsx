import { Box } from '@/styled-system/jsx';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Box fontSize='4xl' fontWeight='700' color='tertiary'>
        Um dia de evento com alto volume de conteúdo sobre Front End, Back End,
        carreira, empreendedorismo e muito mais!
      </Box>
    </main>
  );
}
