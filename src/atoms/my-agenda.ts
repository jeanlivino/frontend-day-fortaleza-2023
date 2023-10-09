'use client';
import { Talk } from '@/types';
import { getFromLocalStorage, saveToLocalStorage } from '@/utils/persist';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

type MyAgenda = Talk[];

const MY_AGENDA_KEY = 'FEND_DAY_MY_AGENDA';

const getPersistedMyAgenda = () =>
  JSON.parse(getFromLocalStorage(MY_AGENDA_KEY) || '[]') as MyAgenda;

const cleanPersistedMyAgenda = () => saveToLocalStorage(MY_AGENDA_KEY, '[]');

const myAgendaAtom = atom<MyAgenda>([]);

export const useMyAgenda = () => {
  const [myAgenda, setMyAgenda] = useAtom(myAgendaAtom);

  const checkIsSaved = (talk: Talk) =>
    myAgenda.some((item) => item.id === talk.id);

  const saveToMyAgenda = (talk: Talk) => {
    if (checkIsSaved(talk)) return;

    setMyAgenda((state) => [...state, talk]);
  };

  const removeFromMyAgenda = (talk: Talk) =>
    setMyAgenda((state) => {
      const updatedState = state.filter((item) => item.id !== talk.id);

      if (updatedState.length === 0) cleanPersistedMyAgenda();

      return updatedState;
    });

  useEffect(() => {
    if (myAgenda.length > 0) {
      saveToLocalStorage(MY_AGENDA_KEY, JSON.stringify(myAgenda));
    }
  }, [myAgenda]);

  useEffect(() => {
    const persistedMyAgenda = getPersistedMyAgenda();

    if (persistedMyAgenda.length > 0) {
      setMyAgenda(persistedMyAgenda);
    }
  }, []);

  return {
    myAgenda,
    checkIsSaved,
    saveToMyAgenda,
    removeFromMyAgenda,
  };
};
