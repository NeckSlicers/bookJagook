import styled from 'styled-components';
import { Button } from '../../components';
import { THEME } from '../../constants';

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.BGC};
`;

export const Title = styled.h1`
  margin: 0 30px;
`;

export const Container = styled.div`
  border: 1px solid lightgray; // 영역 확인용 임시값
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  border-radius: ${THEME.RADIUS};
  background-color: #fff;
  padding: 2rem;

  @media screen and (max-width: 479px) {
  }
`;

export const LogoDiv = styled.div`
  /* border: 1px solid black; */
  width: max-content; // 추후 재지정
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    width: 100px;
  }
`;

export const KakaoSignInBtn = styled(Button)`
  background-color: #fef01b;
  border-radius: ${THEME.RADIUS};
  border: none;
  padding: 0.5rem 1rem;
  box-shadow: 3px 3px 3px ${THEME.LIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 300px;
  color: black;

  img {
    width: 5%;
    margin: 3px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 479px) {
  }
`;
