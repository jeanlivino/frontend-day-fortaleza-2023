'use client';
import { useMyAgenda } from '@/atoms/my-agenda';
import { Grid, styled } from '@/styled-system/jsx';
import { Talks } from '@/types';
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

const MyAgendaList: React.VFC<Props> = ({ talks }) => {
  const { myAgenda, removeFromMyAgenda } = useMyAgenda();

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
        .map((talk) => {
          return (
            <Grid
              key={talk.id}
              gridTemplateColumns={[
                '50px 50px auto 100px',
                '60px 60px auto 100px',
              ]}
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

              <TalkDetail
                {...talk}
                roomName={getRoomName(
                  findAndGetParentKey(talks, talk.id) || ''
                )}
              />
              <styled.button
                color="white"
                cursor="pointer"
                onClick={() => removeFromMyAgenda(talk)}
              >
                - remover
              </styled.button>
            </Grid>
          );
        })}
    </div>
  );
};

export default MyAgendaList;
