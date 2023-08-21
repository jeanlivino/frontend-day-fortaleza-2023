import Header from '@/components/Header';
import SpeakerCard from '@/components/SpeakerCard';
import SpeakerThumb from '@/components/SpeakerThumb';
import { getSiteData } from '@/services/site';
import { Box, Container, Flex, Grid, styled } from '@/styled-system/jsx';
import { Speaker } from '@/types';

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
    </main>
  );
}

const SpeakerInfo: React.FC<Speaker> = ({
  image,
  title,
  role,
  bio,
  company,
  id,
  social_link,
}) => {
  const [firstName, lastName] = title.split(' ');

  return (
    <Grid key={id} gap='2' gridTemplateColumns={['1fr', '1fr', '1.5fr 2fr']}>
      <Box textAlign='center'>
        <SpeakerThumb key={id} image={image} name={title} />
        <styled.a
          display='inline-block'
          fontSize='12px'
          textTransform='uppercase'
          bg='primary.400'
          color='white'
          mt='-40px'
          mx='auto'
          py='2'
          px='4'
          rounded='50px'
          href={social_link}
          target='_blank'
          _hover={{ bg: 'primary' }}
        >
          Rede social
        </styled.a>
      </Box>
      <Box ml={['0', '-30px']} textAlign={['center', 'left']}>
        <styled.h4
          mt={['2', '12']}
          fontSize='sm'
          fontWeight='bold'
          textTransform='uppercase'
          bg='secondary'
          color='primary'
          p='2'
          display='inline-block'
        >
          {firstName} <styled.span fontWeight='400'>{lastName}</styled.span>
        </styled.h4>
        <styled.p
          mt='1'
          fontSize='sm'
          color='secondary'
          textTransform='uppercase'
        >
          {role} <b>{company}</b>
        </styled.p>
        <styled.p color='white' fontSize='14px' mt='2'>
          {bio}
        </styled.p>
      </Box>
    </Grid>
  );
};
