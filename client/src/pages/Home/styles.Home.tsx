import styled from 'styled-components';
import { Layout } from '../../components';

/** 홈페이지 레이아웃  배경색 헤더부분 입히기 필요하다 */
export const LayoutColumn = styled(Layout)`
  padding: 150px 50px 50px 50px;
  flex-direction: column;

  @media screen and (max-width: 479px) {
    padding: 170px 0 0 0;
  }
`;

/** 검색 조건 선택 및 도서 리스트 컨테이너 */
export const BottomContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  height: max-content;
  max-width: 1330px;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
