import styled from 'styled-components';
import { THEME } from '../../constants';

export const WishListLayout = styled.div`
  padding-top: 100px;
  @media screen and (max-width: 480px) {
    padding-top: 150px;
  }
  background-color: ${THEME.BGC};
`;

export const WishListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 30px;
`;
