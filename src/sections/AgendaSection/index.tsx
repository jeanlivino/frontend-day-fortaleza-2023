'use client';
import Container from '@/components/Container';
import { Box, Flex, Grid, styled } from '@/styled-system/jsx';
import { Talk, Talks } from '@/types';
import React from 'react';

const buttons = [
  {
    label: 'Geral',
    value: 'principal',
  },
  {
    label: 'Front-end',
    value: 'frontend',
  },
  {
    label: 'Comunidades',
    value: 'communities',
  },
  {
    label: 'Convida',
    value: 'invite',
  },
] as const;

const featuredTalks = [
  {
    id: 'cred',
    hour: '08:00',
    title: 'Credenciamento',
    featured: true,
  },
  {
    id: 'aber',
    hour: '09:00',
    title: 'Abertura',
    featured: true,
  },
  {
    id: 'net',
    hour: '10:00',
    title: 'Networking',
    featured: true,
  },
  {
    id: 'intervalo-almoco',
    hour: '12:00',
    featured: true,
    title: 'Intervalo Almoço',
  },
  {
    id: 'coffee',
    hour: '15:50',
    title: 'Coffee Break + Networking',
    featured: true,
  },
  {
    id: 'sorteio',
    hour: '16:45',
    title: 'Sorteios de brindes e participantes do Codando no Breu',
    featured: true,
  },
  {
    id: 'fim',
    hour: '18:00',
    title: 'Encerramento das palestras',
    featured: true,
  },
  {
    id: 'code',
    hour: '18:30',
    title: 'Codando no Breu | Code in The Dark',
    featured: true,
  },
] as const;

const Hour: React.FC<{ hour: string }> = ({ hour }) => {
  return (
    <styled.p
      alignSelf='center'
      color='secondary'
      fontSize='md'
      fontWeight='bold'
      textAlign='left'
    >
      {hour}
    </styled.p>
  );
};

const Featured: React.FC<{ text: string }> = ({ text }) => {
  return (
    <styled.p
      color='primary'
      bg='secondary'
      w='100%'
      rounded='100px'
      fontSize='sm'
      fontWeight='bold'
      px='4'
      py='3'
      textTransform='uppercase'
    >
      {text}
    </styled.p>
  );
};

const findAndGetParentKey = (talks: Talks, id: number) => {
  const keys = Object.keys(talks) as (keyof Talks)[];
  const key = keys.find((key) => talks[key].find((talk) => talk.id === id));

  return key;
};

const TalkDetail: React.FC<
  Talk & {
    tag?: keyof Talks;
  }
> = ({ speaker, title, tag }) => {
  const button = buttons.find((button) => button.value === tag);

  const roomName = button?.value === 'principal' ? 'Auditório' : button?.label;

  return (
    <Box borderBottom='1px solid' borderColor='secondary' pb='5'>
      <styled.h4 color='secondary' fontWeight='bold' textTransform='uppercase'>
        {speaker.title}{' '}
        {tag && (
          <styled.span textTransform='none' fontWeight='400' color='white'>
            | Trilha: {roomName}
          </styled.span>
        )}
      </styled.h4>
      <styled.p fontSize='sm' color='white'>
        {speaker.role} {speaker.company}
      </styled.p>
      <styled.p mt='1' color='secondary' fontWeight='bold'>
        {title}{' '}
      </styled.p>
    </Box>
  );
};

type SelectOptions = keyof Talks;

const AgendaSection: React.FC<{ talks: Talks; isActive: boolean }> = ({
  talks,
  isActive,
}) => {
  const [selected, setSelected] = React.useState<SelectOptions>('frontend');
  const [filteredTalks, setFilteredTalks] = React.useState(talks.frontend);

  function handleSelected(value: SelectOptions) {
    console.log(talks);
    setSelected(value);
    if (value === 'principal') {
      setFilteredTalks([
        ...(talks.frontend || []),
        ...(talks.communities || []),
        ...(talks.invite || []),
      ]);
      return;
    }
    setFilteredTalks(talks[value] || []);
  }

  return (
    <Box bgColor='primary' position='relative' pt='10' pb='10' zIndex={1}>
      <Container>
        <styled.h3
          textAlign='center'
          color='white'
          fontSize='2xl'
          fontWeight='bold'
          textTransform='uppercase'
          mb='7'
        >
          Programação
        </styled.h3>

        {!isActive && (
          <styled.p textAlign='center' color='white' fontSize='md' mb='7'>
            A programação será divulgada em breve
          </styled.p>
        )}

        {isActive && (
          <>
            <Flex justifyContent='center' flexWrap='wrap' gap='3' mb='8'>
              {buttons.map((button) => (
                <styled.button
                  key={button.value}
                  color='primary'
                  fontSize='sm'
                  fontWeight='bold'
                  textTransform='uppercase'
                  bg='white'
                  rounded='100px'
                  px='5'
                  py='1.5'
                  cursor='pointer'
                  onClick={() => handleSelected(button.value)}
                  {...(selected === button.value && {
                    bg: 'secondary',
                    color: 'primary',
                  })}
                  _hover={{
                    bg: 'secondary',
                    color: 'primary',
                  }}
                >
                  {button.label}
                </styled.button>
              ))}
            </Flex>

            {[...filteredTalks, ...featuredTalks, ...talks.principal]
              .sort((a, b) => a.hour.localeCompare(b.hour))
              .map((talk) => {
                if (talk.featured) {
                  return (
                    <Grid
                      gridTemplateColumns={['50px auto', '60px auto']}
                      key={talk.id}
                      mt='5'
                    >
                      <Hour hour={talk.hour} />
                      <Featured text={talk.title} />
                    </Grid>
                  );
                }

                return (
                  <Grid
                    key={talk.id}
                    gridTemplateColumns={['50px auto', '60px auto']}
                    mt='5'
                  >
                    <Hour hour={talk.hour} />
                    <TalkDetail
                      {...talk}
                      tag={
                        selected === 'principal' || talk.room === 'principal'
                          ? findAndGetParentKey(talks, talk.id)
                          : undefined
                      }
                    />
                  </Grid>
                );
              })}
          </>
        )}
      </Container>
    </Box>
  );
};

export default AgendaSection;
