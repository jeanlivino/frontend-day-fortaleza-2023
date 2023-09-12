import SpeakerThumb from '@/components/SpeakerThumb';
import { Box, Grid, styled } from '@/styled-system/jsx';
import { Speaker } from '@/types';

const SpeakerInfo: React.FC<Speaker> = ({
  image,
  title,
  role,
  bio,
  company,
  id,
  social_link,
}) => {
  const [firstName, ...names] = title.split(' ');
  const lastName = names.join(' ');

  return (
    <Grid key={id} gridTemplateColumns={['1fr', '1fr', '1.5fr 2fr']}>
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
      <Box ml='0' textAlign={['center', 'left']}>
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

export default SpeakerInfo;
