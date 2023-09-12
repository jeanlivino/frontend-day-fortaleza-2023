'use client';
import { useSpeakerModal } from '@/atoms/speaker-modal';
import React from 'react';
import Modal from '../Modal';
import { styled } from '@/styled-system/jsx';
import SpeakerCard from '../SpeakerCard';

const SpeakerModal: React.FC = () => {
  const { speaker, closeModal } = useSpeakerModal();

  if (!speaker) return null;

  return (
    <Modal onClose={closeModal}>
      <SpeakerCard showBioOnMobile {...speaker} />
    </Modal>
  );
};

export default SpeakerModal;
