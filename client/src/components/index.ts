import styled from 'styled-components';
import { THEME } from '../constants';

// atoms
import { Button } from './atoms/Button';
import { Paragraph } from './atoms/Text';
import { Input } from './atoms/Input';
// molecules
import { Header } from './molecules/Header';
import { Modal } from './molecules';

// 전체 export
export { Button, Input, Paragraph, Header, Modal };

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.BGC};
`;

export const Container = styled.div`
  border: 1px solid lightgray; // 영역 확인용 임시값
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  max-width: 1330px;
  padding: 0 160px;
  border-radius: ${THEME.RADIUS};

  @media screen and (max-width: 479px) {
    padding: 0;
  }
`;
