import styled from 'styled-components';
import { Button } from '../../../components';

export const WishCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 15px;
  width: auto;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CoverInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const BookCover = styled.img`
  width: 100px;
`;

export const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  max-width: 400px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const BookTitle = styled.span`
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.2;
  -webkit-line-clamp: 2;
`;

export const Author = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: grey;
`;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.3;
  -webkit-line-clamp: 3;
  font-size: 14px;
  color: grey;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 480px) {
    flex-direction: row;
    font-size: 14px;
    gap: 10px;
  }
`;

export const WishCardButton = styled(Button)`
  width: 140px;
  font-size: 14px;
  @media screen and (max-width: 480px) {
    font-size: 12px;
    width: 110px;
  }
`;
