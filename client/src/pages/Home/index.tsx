import { useEffect, useState } from 'react';
// import axios from 'axios';
import { LayoutColumn, BottomContainer } from './styles.Home';
import { Header } from '../../components';
import BookList from './BookList';
import SerchOption from './SerchOption';
import TopContainer from './TopContainer';
// import Modal from '../../components/molecules/Modal';

function Home() {
  const tempListData = [
    {
      cover: `https://image.aladin.co.kr/product/4619/35/cover200/8932026564_1.jpg`,
      title: '저녁이 깊다',
      author: '이혜경',
      date: '2022.11.28',
      subTitle: '부제목',
      price: 15000,
      saledPrice: 13500,
      description:
        '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
      addToWish: true,
      addToMine: false,
      // isbn: `123123123`,
    },
  ];
  const [data, setData] = useState(tempListData);

  // interface BookDatas {
  //   title?: string;
  //   link?: string;
  //   author?: string;
  //   pubDate?: string;
  //   description?: string;
  //   isbn?: string;
  //   isbn13?: string;
  //   itemId?: number;
  //   priceSales?: number;
  //   priceStandard?: number;
  //   mallType?: string;
  //   stockStatus?: string;
  //   mileage?: number;
  //   cover?: string;
  //   publisher?: string;
  //   salesPoint?: number;
  //   fixedPrice?: boolean;
  //   customerReviewRank?: number;
  //   bestRank?: number;
  // }

  useEffect(() => {
    setData([
      {
        cover: `https://image.aladin.co.kr/product/4619/35/cover200/8932026564_1.jpg`,
        title: '저녁이 깊다',
        author: '이혜경',
        date: '2022.11.28',
        subTitle: '부제목',
        price: 15000,
        saledPrice: 13500,
        description:
          '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
        addToWish: true,
        addToMine: false,
        // isbn: `123123123`,
      },
      {
        cover: `https://image.aladin.co.kr/product/4619/35/cover200/8932026564_1.jpg`,
        title: '저녁이 깊다',
        author: '이혜경',
        date: '2022.11.28',
        subTitle: '부제목',
        price: 15000,
        saledPrice: 13500,
        description:
          '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
        addToWish: true,
        addToMine: false,
        // isbn: `123123123`,
      },
      {
        cover: `https://image.aladin.co.kr/product/4619/35/cover200/8932026564_1.jpg`,
        title: '저녁이 깊다',
        author: '이혜경',
        date: '2022.11.28',
        subTitle: '부제목',
        price: 15000,
        saledPrice: 13500,
        description:
          '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
        addToWish: true,
        addToMine: false,
        // isbn: `123123123`,
      },
    ]);
  }, []);
  // useEffect(() => {
  //   axios<BookDatas>({
  //     method: 'get',
  //     url: 'http://www.aladin.co.kr/ttb/api/test/ItemList_20131101.js',
  //   }).then(function (response) {
  //     console.log(response.item);
  //   });
  // }, []);

  return (
    <LayoutColumn>
      <Header />
      <TopContainer />
      <BottomContainer>
        <SerchOption />
        {data.map((list) => (
          <BookList list={list} />
        ))}
      </BottomContainer>
    </LayoutColumn>
  );
}

export default Home;