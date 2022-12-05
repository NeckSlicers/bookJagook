import styled from 'styled-components';
import { THEME } from '../../../constants';
// import { ModalProps } from '../../../types';

// * 1. 전역에서 재사용 가능한 모달 스타일링

/** 모달 팝업 뒷배경 div 태그입니다. */
export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

/** 모달 내용 전체 화면영역 div 태그입니다. */
export const ModalView = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  width: max-content;
  height: max-content;

  background-color: ${THEME.CONTENTBG};
  border-radius: ${THEME.RADIUS};
  text-align: center;
  border-radius: 7px;
  font-size: 14px;

  @media screen and (max-width: 479px) {
    width: 100%;
  }

  > .closingBtn {
    color: black;
    position: absolute; // 추가
    top: 1px; // 추가
    right: 1px; // 추가
    border: none; // 추가
    background-color: transparent;
    cursor: pointer;
  }
`;

/** 재사용 가능한 등록, 취소 버튼 위치지정용 wrap하는 div 태그입니다. */
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  padding: 1rem;
`;
