import { GiBookshelf } from 'react-icons/gi';
import { ImCreditCard } from 'react-icons/im';
import { FiTrash2 } from 'react-icons/fi';
import {
  WishCardContainer,
  CoverInfoWrapper,
  BookCover,
  BookInfoWrapper,
  BookTitle,
  Author,
  Description,
  ButtonWrapper,
  WishCardButton,
} from './styles.WishCard';

const WishListData = {
  isbn13: '9791161571188',
  cover:
    'https://image.aladin.co.kr/product/29045/74/cover500/s732830515_1.jpg',
  title: '불편한 편의점(40만부 기념 벚꽃 에디션)',
  author: '김호연 (지은이)',
  description: `<망원동 브라더스>의 작가 김호연의 '동네이야기' 시즌 2. 청파동 골목 모퉁이에 자리 잡은 작은 편의점을 무대로 힘겨운 시대를 살아가는 우리 이웃들의 삶의 속내와 희로애락을 따뜻하고 유머러스하게 담아냈다. <망원동 브라더스>에서 망원동이라는 공간의 체험적 지리지를 잘 활용해 유쾌한 재미와 공감을 이끌어냈듯 이번에는 서울의 오래된 동네 청파동에 대한 공감각을 생생하게 포착해 또 하나의 흥미진진한 ‘동네 이야기’를 탄생시켰다.`,
  addToWish: true,
  addToMine: false,
  aladinURL:
    'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290457417&start=wz&ptid=9&utm_source=aladin&utm_medium=wizard&utm_campaign=choice&utm_content=welcome',
};

function WishCard() {
  const { cover, title, author, description } = WishListData;

  return (
    <WishCardContainer>
      <CoverInfoWrapper>
        <BookCover src={cover} alt="표지" />
        <BookInfoWrapper>
          <BookTitle>{title}</BookTitle>
          <Author>{author}</Author>
          <Description>{description}</Description>
        </BookInfoWrapper>
      </CoverInfoWrapper>
      <ButtonWrapper>
        <WishCardButton>
          <span>구매하기</span>
          <div>
            <ImCreditCard /> 구매
          </div>
        </WishCardButton>
        <WishCardButton>
          <span>나의 서재에 담기</span>
          <div>
            <GiBookshelf /> 담기
          </div>
        </WishCardButton>
        <WishCardButton>
          <span>삭제</span>
          <div>
            <FiTrash2 /> 삭제
          </div>
        </WishCardButton>
      </ButtonWrapper>
    </WishCardContainer>
  );
}

export default WishCard;
