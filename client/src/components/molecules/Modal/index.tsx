import React, { useState } from 'react';
import { Button } from '../../atoms/Button';
import { ModalBackdrop, ModalView } from './styles.Modal';
import { ModalProps } from '../../../types';

function Modal({ modalType, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
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
              x
            </Button>
            {children}
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
}

export default Modal;
