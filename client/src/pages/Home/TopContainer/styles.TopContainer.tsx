import styled from 'styled-components';
import { Container } from '../../../components';
import { THEME } from '../../../constants';

/** 검색 및 버튼 컨테이너 */
export const TopButtonContainer = styled(Container)`
  border: none;
`;

export const SerchingGuide = styled.p`
  padding-bottom: 2rem;
  font-weight: bold;
`;

export const SerchingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  Button {
    width: 5em;
  }
`;

export const SerchingInput = styled.input`
  border: 1px solid ${THEME.MEDIUM};
  border-radius: ${THEME.RADIUS};
  width: 20em;
  height: 35px;

  :focus {
    font-size: 16px;
    padding-left: 10px;
  }
  ::placeholder {
    padding-left: 10px;
  }
`;

export const SerchingButtonContainer = styled.div`
  width: 20em;
  display: flex;
  justify-content: space-around;
  padding: 1em 0;
`;
