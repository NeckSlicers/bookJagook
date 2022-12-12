import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

import { InfoLayout, BookTitle, BookImg, BookRate } from './styles.BookInfo';

function BookInfo() {
  return (
    <InfoLayout>
      <BookImg
        src="https://image.aladin.co.kr/product/30366/97/coversum/k422830688_2.jpg"
        alt="book-cover"
      />
      <BookTitle>백만장자를 위한 공짜 음식 1</BookTitle>
      <BookRate type="button">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </BookRate>
    </InfoLayout>
  );
}

export default BookInfo;
