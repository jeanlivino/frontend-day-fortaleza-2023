import { styled } from '@/styled-system/jsx';

export const ModalWrapper = styled('dialog', {
  base: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ModalOverlay = styled('div', {
  base: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '5',
  },
});

export const ModalContent = styled('div', {
  base: {
    backgroundColor: 'primary',
    padding: '20px',
    maxWidth: '300px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    zIndex: '6',
  },
});

export const CloseButton = styled('button', {
  base: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '18px',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    fontWeight: 'bold',
  },
});
