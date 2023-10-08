'use client';
import { useMyAgenda } from '@/atoms/my-agenda';
import { Box, Grid, styled } from '@/styled-system/jsx';
import { Talk, Talks } from '@/types';
import React from 'react';
import TalkHour from '../TalkHour';
import TalkDetail from '../TalkDetail';
import { getRoomName } from '@/utils/rooms';
import NextImage from 'next/image';

type Props = {
  talks: Talks;
};

const findAndGetParentKey = (talks: Talks, id: number) => {
  const keys = Object.keys(talks) as (keyof Talks)[];
  const key = keys.find((key) => talks[key].find((talk) => talk.id === id));

  return key;
};

const getTalkFromApi = (talks: Talks, id: number) => {
  const roomKey = findAndGetParentKey(talks, id) as keyof Talks | undefined;

  if (!roomKey) return;

  return talks[roomKey].find((talk) => talk.id === id);
};

const MyAgendaList: React.VFC<Props> = ({ talks }) => {
  const { myAgenda, removeFromMyAgenda } = useMyAgenda();

  const hasChangedTalkData = (cachedTalk: Talk) => {
    const roomKey = findAndGetParentKey(talks, cachedTalk.id) as keyof Talks;
    const talkFromApi = talks[roomKey].find(
      (talk) => talk.id === cachedTalk.id
    );

    return JSON.stringify(talkFromApi) !== JSON.stringify(cachedTalk);
  };

  if (myAgenda.length < 1)
    return (
      <styled.p color="white" textAlign="center">
        Você ainda não possui palestras salvas na sua agenda. Acesse a
        programação{' '}
        <styled.a href="/agenda" textDecoration="underline">
          clicando aqui
        </styled.a>
      </styled.p>
    );

  return (
    <div>
      {myAgenda
        .sort((a, b) => a.hour.localeCompare(b.hour))
        .map((cachedTalk) => {
          const talk = getTalkFromApi(talks, cachedTalk.id);

          if (!talk) return;

          return (
            <Grid
              key={talk.id}
              gridTemplateColumns={['50px 50px auto ', '60px 60px auto ']}
              mt="5"
            >
              <TalkHour hour={talk.hour} />

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
              <Box>
                {hasChangedTalkData(cachedTalk) && (
                  <styled.span
                    fontSize="sm"
                    fontStyle="italic"
                    color="white"
                    display="inline-block"
                    px="4"
                    mb="1"
                    border="1px solid white"
                    borderRadius="100px"
                    cursor="pointer"
                  >
                    atualizada
                  </styled.span>
                )}
                <TalkDetail
                  {...talk}
                  roomName={getRoomName(
                    findAndGetParentKey(talks, talk.id) || ''
                  )}
                >
                  <styled.button
                    color="white"
                    cursor="pointer"
                    onClick={() => removeFromMyAgenda(talk)}
                  >
                    - remover
                  </styled.button>
                </TalkDetail>
              </Box>
            </Grid>
          );
        })}
    </div>
  );
};

export default MyAgendaList;
