import { useEffect } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    const handleKey = e => {
      if (e.code === 'Escape') {
        onClose('');
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handelClick = e => {
    if (e.currentTarget === e.target) {
      onClose('');
    }
  };

  return createPortal(
    <div
      onClick={handelClick}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: '1100',
      }}
    >
      <img width="50%" src={largeImageURL} alt="name" />
    </div>,
    modalRoot
  );
};
