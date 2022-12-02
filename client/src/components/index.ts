import styled from 'styled-components';
import { THEME } from '../constants';

// atoms
import { Button } from './atoms/Button';
import { Paragraph } from './atoms/Text';
import { Input } from './atoms/Input';
// molecules
import { Header } from './molecules/Header';

// 전체 export
export { Button, Input, Paragraph, Header };

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.bgc};
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
  border-radius: ${THEME.radius};
`;
