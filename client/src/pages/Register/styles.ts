import styled from 'styled-components';
import { THEME } from '../../constants';

export const AuthFormContainer = styled.div`
  border: 2px solid ${THEME.LIGHT};
  border-radius: ${THEME.RADIUS};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  height: max-content;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AuthChangeBtn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${THEME.MEDIUM};
  border-left: 1px solid ${THEME.MEDIUM};
  border-right: 1px solid ${THEME.MEDIUM};
  div {
    padding: 1rem;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #active {
    background-color: ${THEME.STRONG};
    color: #fff;
  }
`;
