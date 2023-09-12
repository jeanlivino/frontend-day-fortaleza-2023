'use client';
import { Speaker } from '@/types';
import { atom, useAtom } from 'jotai';
type SpeakerModal = {
  isOpen: boolean;
  speaker: Speaker | null;
};

const speakerModalAtom = atom<SpeakerModal>({
  isOpen: false,
  speaker: null,
});

export const useSpeakerModal = () => {
  const [speakerModal, setSpeakerModal] = useAtom(speakerModalAtom);

  function closeModal() {
    setSpeakerModal({ isOpen: false, speaker: null });
  }

  function openModal(speaker: Speaker) {
    setSpeakerModal({ isOpen: true, speaker });
  }

  return {
    ...speakerModal,
    closeModal,
    openModal,
  };
};
