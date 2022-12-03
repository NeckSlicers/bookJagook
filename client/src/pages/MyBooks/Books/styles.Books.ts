import styled from 'styled-components';
import { THEME } from '../../../constants';

/** 나의 서재 전체 도서 목록 컨테이너 section 태그입니다. */
export const BookCards = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
  }
`;

/** 개별 도서 테두리 영역 article 태그입니다. */
export const BookCard = styled.article`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.CONTENTBG};
  cursor: pointer;
`;

/** 개별 도서 책 표지 img 태그입니다. */
export const BookImg = styled.img`
  width: 80%;
  display: block;

  @media screen and (max-width: 479px) {
    width: max-content;
  }
`;

/** 개별 도서의 정보 표시영역 div 태그입니다 */
export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  @media screen and (max-width: 479px) {
    width: max-content;
  }
`;

/** 개별 도서 책 제목 h4 태그입니다. */
export const BookTitle = styled.h3``;

/** 개별 도서 별점영역을 감싸는 평점 추가 button 태그입니다. */
export const BookRate = styled.button`
  cursor: pointer;
  border: none;
`;

/** 개별 도서의 컨텐츠 영역 div 태그입니다. */
export const BookContent = styled.div`
  border: 1px solid gray;
  line-height: 1.5;
  font-size: 0.9em;
  padding: 15px;
`;
