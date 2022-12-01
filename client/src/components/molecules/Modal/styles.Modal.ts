import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vw;
`;

// * 모달 팝업 뒷배경
export const ModalBackdrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* width: max-content; */
  /* height: max-content; */

  width: 500px; // 확인용 임시 값
  height: 800px; // 확인용 임시 값

  background-color: #fff;
  text-align: center;
  border-radius: 7px;
  font-size: 14px;

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
