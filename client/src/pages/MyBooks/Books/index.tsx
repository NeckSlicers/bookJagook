import React, { useState } from 'react';
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
  const [hover, setHover] = useState(false);

  const openModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const hoverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.type === 'mouseleave') return setHover(false);
    return setHover(true);
  };

  return (
    <BookCards>
      <BookCard onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
        <BookInfo>
          {hover ? (
            <>
              <p>등록된 리뷰가 없습니다.</p>
              <Modal modalType="review" />
            </>
          ) : (
            <BookImg
              src="https://image.aladin.co.kr/product/30366/97/coversum/k422830688_2.jpg"
              alt="book-cover"
            />
          )}
        </BookInfo>
        <BookTitle>백만장자를 위한 공짜 음식 1</BookTitle>
        {/* TODO: 
          1. 등록된 평점에 따라 별점 변경되도록 로직 추가 
          */}
        <BookRate type="button" onClick={openModalHandler}>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </BookRate>
        {/* TODO: 
        1. 등록한 독후감이 있으면 "작성한 독후감 보기" 없으면 현 모달(독후감 쓰기)
        2. 하단에 "수정", "삭제"
        */}
        <Modal modalType="report" />
      </BookCard>
    </BookCards>
  );
}

export default Books;
