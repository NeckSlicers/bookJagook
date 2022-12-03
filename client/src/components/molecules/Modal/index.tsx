import React, { useState } from 'react';
// import { Container } from '../../index';
import { Button } from '../../atoms/Button';
import {
  ModalBackdrop,
  ModalView,
  ReviewModal,
  ButtonWrapper,
} from './styles.Modal';
import { ModalProps } from '../../../types';
import { Input } from '../../atoms';

function Modal({ modalType }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={openModalHandler}>
        {modalType === 'review' && '독후감 쓰기'}
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
            {modalType === 'review' && (
              <ReviewModal>
                <h2>독후감쓰기</h2>
                <Input inputType="review" />
                <ButtonWrapper>
                  <Button buttonType="cancel">취소</Button>
                  <Button>등록</Button>
                </ButtonWrapper>
              </ReviewModal>
            )}
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
}

export default Modal;
