import React, { useState } from 'react';
// import { Container } from '../../index';
import { Button } from '../../atoms/Button';
import { ModalBackdrop, ModalView } from './styles.Modal';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={openModalHandler}>
        {isOpen ? 'Opened!' : 'Open Modal'}
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
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                omnis! Consectetur, voluptatem delectus nostrum molestias dolore
                similique. Unde asperiores, quod eos dicta ipsum voluptas
                delectus, facere nisi, odio eveniet autem.
              </p>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
}

export default Modal;
