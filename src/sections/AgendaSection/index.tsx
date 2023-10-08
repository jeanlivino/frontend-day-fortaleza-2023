'use client';
import Container from '@/components/Container';
import { Box, Flex, Grid, styled } from '@/styled-system/jsx';
import { Talks } from '@/types';
import React, { useEffect } from 'react';

import NextImage from 'next/image';
import HoverEffect from '@/components/HoverEffect';
import { useSpeakerModal } from '@/atoms/speaker-modal';
import SaveToAgendaButton from '@/components/SaveToAgendaButton';
import { useMyAgenda } from '@/atoms/my-agenda';
import TalkHour from '@/components/TalkHour';
import TalkDetail from '@/components/TalkDetail';
import { getRoomName, roomsButtons } from '@/utils/rooms';

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

const Featured: React.FC<{ text: string }> = ({ text }) => {
  return (
    <styled.p
      color="primary"
      bg="secondary"
      w="100%"
      rounded="100px"
      fontSize="sm"
      fontWeight="bold"
      px="4"
      py="3"
      textTransform="uppercase"
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

type SelectOptions = keyof Talks;

const AgendaSection: React.FC<{
  talks: Talks;
  isActive: boolean;
  defaultRoom?: SelectOptions;
}> = ({ talks, isActive, defaultRoom = 'frontend' }) => {
  const { openModal } = useSpeakerModal();
  const { checkIsSaved, saveToMyAgenda } = useMyAgenda();

  const [selected, setSelected] = React.useState<SelectOptions>(defaultRoom);
  const [filteredTalks, setFilteredTalks] = React.useState(
    defaultRoom === 'principal' ? [] : talks[defaultRoom]
  );

  const onSelectPrincipal = () => {
    setFilteredTalks([
      ...(talks.frontend || []),
      ...(talks.communities || []),
      ...(talks.invite || []),
    ]);
  };

  function handleSelected(value: SelectOptions) {
    setSelected(value);
    if (value === 'principal') {
      onSelectPrincipal();
      return;
    }
    setFilteredTalks(talks[value] || []);
  }

  useEffect(() => {
    if (defaultRoom === 'principal') {
      onSelectPrincipal();
    }
  }, []);

  return (
    <Box bgColor="primary" position="relative" pt="10" pb="10" zIndex={1}>
      <Container>
        <styled.h3
          textAlign="center"
          color="white"
          fontSize="2xl"
          fontWeight="bold"
          textTransform="uppercase"
          mb="7"
        >
          Programação
        </styled.h3>

        {!isActive && (
          <styled.p textAlign="center" color="white" fontSize="md" mb="7">
            A programação será divulgada em breve
          </styled.p>
        )}

        {isActive && (
          <>
            <Flex justifyContent="center" flexWrap="wrap" gap="3" mb="8">
              {roomsButtons.map((button) => (
                <styled.button
                  key={button.value}
                  color="primary"
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                  bg="white"
                  rounded="100px"
                  px="5"
                  py="1.5"
                  cursor="pointer"
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
                      mt="5"
                    >
                      <TalkHour hour={talk.hour} />
                      <Featured text={talk.title} />
                    </Grid>
                  );
                }

                return (
                  <Grid
                    key={talk.id}
                    gridTemplateColumns={['50px 50px auto', '60px 60px auto']}
                    mt="5"
                  >
                    <TalkHour hour={talk.hour} />
                    <styled.button
                      cursor="pointer"
                      display="flex"
                      alignItems="flex-start"
                      onClick={() => openModal(talk.speaker)}
                    >
                      <HoverEffect>
                        <NextImage
                          src={talk.speaker.image}
                          width={200}
                          height={200}
                          alt={talk.speaker.title}
                          style={{
                            borderRadius: '50%',
                            aspectRatio: '1/1',
                            objectFit: 'cover',
                            width: '100%',
                          }}
                        />
                      </HoverEffect>
                    </styled.button>

                    <TalkDetail
                      {...talk}
                      onSpeakerClick={() => openModal(talk.speaker)}
                      roomName={
                        selected === 'principal' || talk.room === 'principal'
                          ? getRoomName(
                              findAndGetParentKey(talks, talk.id) || ''
                            )
                          : undefined
                      }
                    >
                      <SaveToAgendaButton
                        isSaved={checkIsSaved(talk)}
                        onClick={() => saveToMyAgenda(talk)}
                      />
                    </TalkDetail>
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
