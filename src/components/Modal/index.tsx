'use client';
import React, { useEffect } from 'react';

import * as Styled from './styles';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, onClose }) => {
  useEffect(() => {
    const handleEscapeKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [onClose]);

  return (
    <Styled.ModalWrapper>
      <Styled.ModalContent>
        {children}
        <Styled.CloseButton onClick={onClose}>X</Styled.CloseButton>
      </Styled.ModalContent>
      <Styled.ModalOverlay onClick={onClose} />
    </Styled.ModalWrapper>
  );
};

export default Modal;
