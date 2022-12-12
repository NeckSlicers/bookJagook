import styled from 'styled-components';
import { THEME } from '../../../../../constants';

/** 개별 도서 테두리 영역 article 태그입니다. */
export const BookCard = styled.article`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  border-radius: ${THEME.RADIUS};
  width: 250px;
  height: 450px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.CONTENTBG};
  cursor: pointer;
`;

/** 개별 도서의 정보 표시영역 div 태그입니다 */
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  height: 70%;

  @media screen and (max-width: 479px) {
    /* width: max-content; */
  }
`;

/** 개별 도서의 컨텐츠 영역 div 태그입니다. */
export const BookContent = styled.div`
  border: 1px solid gray;
  line-height: 1.5;
  font-size: 0.9em;
  padding: 15px;
`;

export const ReviewTitle = styled.h2`
  font-size: 24px;
  padding: 1rem 0.5rem;
  color: ${THEME.STRONG};
`;

export const ReviewView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReportView = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
