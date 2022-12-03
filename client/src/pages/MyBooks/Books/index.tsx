import { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import {
  BookCards,
  BookCard,
  BookImg,
  BookInfo,
  BookTitle,
  BookRate,
} from './styles.Books';

import { Modal } from '../../../components';

function Books() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <BookCards>
      <BookCard>
        <BookImg
          src="https://image.aladin.co.kr/product/30366/97/coversum/k422830688_2.jpg"
          alt="book-cover"
        />
        <BookInfo>
          <BookTitle>백만장자를 위한 공짜 음식 1</BookTitle>
          <BookRate type="button" onClick={openModalHandler}>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </BookRate>
        </BookInfo>
        <Modal modalType="review" />
      </BookCard>
    </BookCards>
  );
}

export default Books;
