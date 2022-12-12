import styled from 'styled-components';

/** 리스트 맵핑용 컨테이너 */
export const ListContainer = styled.div`
  /* background-color: #cfcfcf; */
  padding: 1em 0.5em;
  gap: 10px;
  display: flex;
  max-width: 50em;
  svg {
    height: 30px;
    width: 30px;
  }
  @media screen and (max-width: 479px) {
    padding: 0.5em 0;
    gap: none;
  }
`;

/** 북 커버용 박스  */
export const BookCover = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/** 북 커버 이미지 */
export const BookImg = styled.img`
  width: 100px;
`;

/** 책 텍스트 컨테이너 */
export const BookData = styled.div`
  padding-right: 10%;
  @media screen and (max-width: 479px) {
    padding: 0;
  }
`;

/** 제목 반응형 조절용 */
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 479px) {
    flex-direction: row;
  }
`;

/** 제목 강조 */
export const Title = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 1.2;
  -webkit-line-clamp: 2;
  font-size: 1.5rem;
  font-weight: bold;
  padding-right: 1rem;
`;

/** 작가,날짜 컨테이너 */
export const AuthorDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

/** 책 소개 */
export const Description = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 1.2;
  -webkit-line-clamp: 3;
`;
