import styled from 'styled-components';
import { THEME } from '../../../../../constants';

export const InfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${THEME.RADIUS};

  @media screen and (max-width: 479px) {
    /* width: max-content; */
  }
`;

/** 개별 도서 책 제목 h4 태그입니다. */
export const BookTitle = styled.h3`
  padding: 0.5rem;
`;

/** 개별 도서 별점영역을 감싸는 평점 추가 button 태그입니다. */
export const BookRate = styled.button`
  cursor: pointer;
  border: none;
`;

/** 개별 도서 책 표지 img 태그입니다. */
export const BookImg = styled.img`
  width: 80%;

  @media screen and (max-width: 479px) {
    width: max-content;
  }
`;
