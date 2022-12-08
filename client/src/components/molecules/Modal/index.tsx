import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { Button } from '../../atoms/Button';
import { ModalBackdrop, ModalView } from './styles.Modal';
import { ModalProps } from '../../../types';

function Modal({ modalType, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={openModalHandler}>
        {modalType === 'review' && (
          <span>
            별점, 한줄평 <br /> 등록하기
          </span>
        )}
        {modalType === 'report' && '독후감 쓰기'}
      </Button>
      {isOpen ? (
        <ModalBackdrop onClick={() => openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <Button
              type="button"
              className="closingBtn"
              onClick={openModalHandler}
            >
              <GrClose />
            </Button>
            {children}
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
}

export default Modal;
