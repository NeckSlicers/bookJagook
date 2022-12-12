import styled from 'styled-components';

import { Layout, Container } from '../../components/index';

/** 검색 및 버튼 컨테이너 */
export const TopContainer = styled(Container)`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  max-width: 1330px;
  padding: 0 160px;

  @media screen and (max-width: 479px) {
    padding: 0;
  }
`;

/** 검색 조건 선택 및 도서 리스트 컨테이너 */
export const BottomContainer = styled(Container)`
  /* border: none; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center;
  height: max-content; */
  max-width: 1330px;
  /* padding: 0 160px; */
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
/** 리스트 맵핑용 컨테이너 */
export const ListContainer = styled(Container)`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: max-content;
  .cover {
    width: 120px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 120px;
    max-height: 120px;
  }
  .text {
    /* min-width: 340px; */
    max-width: 440px;
    padding: 0 2rem;
  }
  .icon {
    height: 140px;
  }
  @media screen and (max-width: 479px) {
    /* min-width: 300px;
    display: flex; */
    .text {
      /* min-width: 300px; */
      padding: 0;
    }
  }
`;
/** 제목 반응형 조절용 */
export const TitleContainer = styled(Container)`
  border: none;
  display: block;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  max-width: 1330px;
  padding: 0;
  .spaceBetween {
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media screen and (max-width: 479px) {
    /* min-width: 300px; */
    display: flex;
    row-gap: 1rem;
  }
`;

/** 홈페이지 레이아웃  배경색 헤더부분 입히기 필요하다 */
export const LayoutColumn = styled(Layout)`
  padding-top: 150px;
  flex-direction: column;
  /* justify-content: start; */

  @media screen and (max-width: 479px) {
  }
`;
