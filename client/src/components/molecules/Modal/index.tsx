import React, { useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { Button } from '../../atoms/Button';
import { ModalBackdrop, ModalView } from './styles.Modal';
import { ModalProps } from '../../../types';
import ModalContainer, { PortalTarget } from './ModalContainer';

function Modal({ isOpen, onClose, children }: ModalProps) {
  const outsideRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalContainer target={PortalTarget.MODAL}>
      <ModalBackdrop ref={outsideRef} onClick={closeModal}>
        <ModalView>
          <Button type="button" className="closingBtn" onClick={onClose}>
            <GrClose />
          </Button>
          {children}
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  ) : null;
}

export default Modal;
