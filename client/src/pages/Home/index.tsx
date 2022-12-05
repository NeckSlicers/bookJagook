import styled from 'styled-components';
// import { useState } from 'react';
import {
  Layout,
  Container,
  Button,
  Input,
  Paragraph,
  Header,
} from '../../components/index';
import coverImg from '../../assets/logo.png';
// import Modal from '../../components/molecules/Modal';

/** 검색 및 버튼 컨테이너 */
export const TopContainer = styled(Container)`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  max-width: 1330px;
  padding: 0 160px;
`;

/** 검색 조건 선택 및 도서 리스트 컨테이너 */
export const BottomContainer = styled(Container)`
  /* border: none; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center;
  height: max-content; */
  max-width: 1330px;
  /* padding: 0 160px; */
`;
/** 리스트 맵핑용 컨테이너 */
export const ListContainer = styled(Container)`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: max-content;
  .cover {
    width: 120px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 120px;
    max-height: 120px;
  }
  .text {
    min-width: 340px;
    max-width: 440px;
    padding: 0 2rem;
  }
  .icon {
    height: 140px;
    display: block;
  }
  @media screen and (max-width: 479px) {
    /* min-width: 300px;
    display: flex; */
    .text {
      min-width: 300px;
      padding: 0;
    }
  }
`;
/** 제목 반응형 조절용 */
export const TitleContainer = styled(Container)`
  border: none;
  display: block;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  max-width: 1330px;
  padding: 0;
  .spaceBetween {
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media screen and (max-width: 479px) {
    min-width: 300px;
    display: flex;
    row-gap: 1rem;
  }
`;

/** 홈페이지 레이아웃  배경색 헤더부분 입히기 필요하다 */
export const LayoutColumn = styled(Layout)`
  padding-top: 150px;
  flex-direction: column;
  justify-content: start;
`;

/** 임시데이터로 key는 isbn으로 할 예정 */
const data = [
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
];
function Home() {
  // const [modal, setModal] = useState(false);
  return (
    <LayoutColumn>
      <Header />
      <TopContainer>
        <Paragraph>읽고 싶은 책을 검색해보세요!</Paragraph>
        <Input type="text" />
        <Button>찾기</Button>
        <>
          <Button>베스트셀러</Button>
          <Button>신간 리스트</Button>
        </>
      </TopContainer>
      <BottomContainer>
        <div>검색조건변경</div>
        <div>검색 조건 박스</div>
        {data.map((el) => (
          <ListContainer>
            <div className="cover">
              <img src={el.cover} alt="cover" />
            </div>
            <div className="text">
              <TitleContainer>
                {/* section, article 지정해서 사용 */}
                <div className="title">{el.title}</div>
                <div className="spaceBetween">
                  <span>{el.author}</span>
                  <span>{el.date}</span>
                </div>
              </TitleContainer>
              <div>{el.subTitle}</div>
              <div>
                {el.price}
                {'->'}
                {el.saledPrice}원
              </div>
              <div>{el.description}</div>
            </div>
            <div className="icon">
              <div>icon</div>
            </div>
          </ListContainer>
        ))}
        {/* <ListContainer>
          <div className="cover">
            <img src={data[0].cover} alt="cover" />
          </div>
          <div className="text">
            <TitleContainer>
              <div className="title">{data[0].title}</div>
              <div>{data[0].author}</div>
            </TitleContainer>
            <div>{data[0].date}</div>
            <div>{data[0].subTitle}</div>
            <div>
              {data[0].price}
              {'->'}
              {data[0].saledPrice}원
            </div>
            <div>{data[0].description}</div>
          </div>
          <div className="icon">
            <div>icon</div>
          </div>
        </ListContainer> */}
      </BottomContainer>
    </LayoutColumn>
  );
}

export default Home;
