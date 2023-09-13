'use client';
import React, { useEffect } from 'react';
import * as focusTrap from 'focus-trap';
import * as Styled from './styles';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, onClose }) => {
  const ref = React.useRef<HTMLDialogElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const trap = focusTrap.createFocusTrap(ref.current as HTMLDialogElement);
    trap.activate();

    const handleEscapeKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscapeKeyPress);
      document.body.style.overflow = 'auto';
      trap.deactivate();
    };
  }, [onClose]);

  return (
    <Styled.ModalWrapper open ref={ref}>
      <Styled.ModalContent>
        {children}
        <Styled.CloseButton onClick={onClose} aria-label='Fechar modal'>
          X
        </Styled.CloseButton>
      </Styled.ModalContent>
      <Styled.ModalOverlay onClick={onClose} />
    </Styled.ModalWrapper>
  );
};

export default Modal;
