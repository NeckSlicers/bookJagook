import { VscAdd, VscCheck } from 'react-icons/vsc';
import {
  ListContainer,
  TitleContainer,
  BookCover,
  BookImg,
  BookData,
  Title,
  AuthorDateContainer,
  Description,
} from './styles.BookList';
/** 임시데이터로 key는 isbn으로 할 예정 */
// const data = {
//   cover: `https://image.aladin.co.kr/product/4619/35/cover200/8932026564_1.jpg`,
//   title: '저녁이 깊다',
//   author: '이혜경',
//   date: '2022.11.28',
//   subTitle: '부제목',
//   price: 15000,
//   saledPrice: 13500,
//   description:
//     '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
//   addToWish: true,
//   addToMine: false,
// };
/** fixedPrice = wiscart, subTitle = title로 대체상태 */
interface ListData {
  list: {
    title?: string;
    link?: string;
    author?: string;
    pubDate?: string;
    description?: string;
    isbn?: string;
    isbn13?: string;
    itemId?: number;
    priceSales?: number;
    priceStandard?: number;
    mallType?: string;
    stockStatus?: string;
    mileage?: number;
    cover?: string;
    publisher?: string;
    salesPoint?: number;
    fixedPrice?: boolean;
    customerReviewRank?: number;
    bestRank?: number;
  };
}

function BookList({ list }: ListData) {
  return (
    <ListContainer>
      <BookCover className="cover">
        <BookImg src={list.cover} alt="cover" />
      </BookCover>
      <BookData>
        <TitleContainer>
          <Title>{list.title}</Title>
          <AuthorDateContainer>
            <span>{list.author}</span>
            <span>{list.pubDate}</span>
          </AuthorDateContainer>
        </TitleContainer>
        <span>{list.title}</span>
        <div>
          {list.priceStandard}
          {'->'}
          {list.priceSales}원
        </div>
        <Description>{list.description}</Description>
      </BookData>
      {list.fixedPrice ? <VscCheck /> : <VscAdd />}
    </ListContainer>
  );
}

export default BookList;
