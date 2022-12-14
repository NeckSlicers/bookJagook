import axios from 'axios';

import { AladinBook, BookItem } from '../types';
// &QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101

// const REQUEST = {
//   NEW_BOOK_LIST: (page: number, count: number): string =>
//     `&QueryType=ItemNewAll&Start=${page}&MaxResults=${count}`,
//   BEST_SELLER_LIST: (page: number, count: number): string =>
//     `&QueryType=Bestseller&Start=${page}&MaxResults=${count}`,
//   SEARCH_BOOK: (itemId: string): string => `ItemLookUp.aspx?ItemId=${itemId}`,
// };

interface IBookList {
  totalPage: number;
  page: number;
  resultItem: number;
  items?: BookItem[];
}

export const getNewBookList = async (
  page: number,
  count: number,
  resultItem: string,
) => {
  const { data } = await axios.get(`${process.env.REACT_APP_ALADIN_BASE_URL}
  ${process.env.REACT_APP_TTB_KEY}&QueryType=ItemNewAll&MaxResults=${count}&Start=${page}&SearchTarget=${resultItem}&output=js&Version=20131101
  `);

  const newItems = data.item.map((item: AladinBook) => ({
    id: item.isbn13,
    bookImg: item.cover,
    link: item.link,
    title: item.title,
    author: item.author,
    description: item.description,
    publisher: item.publisher,
    priceStandard: item.priceStandard,
    priceSales: item.priceSales,
  }));

  const result: IBookList = {
    totalPage: data.totalResults / Number(resultItem),
    page: Number(page),
    resultItem: Number(page),
    items: newItems,
  };

  return result;
};

// export const getBestsellerBookList = async (
//   page: string,
//   resultItem: string,
// ) => {
//   const { data } = await axios.get(
//     REQUEST.BEST_SELLER_LIST(Number(page), Number(resultItem)),
//   );

//   const newItems = data.item.map((item: AladinBook) => ({
//     id: item.isbn13,
//     bookImg: item.cover,
//     link: item.link,
//     title: item.title,
//     author: item.author,
//     description: item.description,
//     publisher: item.publisher,
//     priceStandard: item.priceStandard,
//     priceSales: item.priceSales,
//   }));

//   const result: IBookList = {
//     totalPage: data.totalResults / Number(resultItem),
//     page: Number(page),
//     resultItem: Number(page),
//     items: newItems,
//   };

//   return result;
// };

// export const getBookList = async (req: Request, res: Response) => {
//   const { type = 'newbooks', page = '1', resultItem = '10' } = req.query;

//   try {
//     if (type === 'newbooks') {
//       const result = await getNewBookList(page as string, resultItem as string);
//       return res.status(200).json(result);
//     }

//     if (type === 'bestseller') {
//       const result = await getBestsellerBookList(
//         page as string,
//         resultItem as string,
//       );
//       return res.status(200).json(result);
//     }
//   } catch {
//     return res.status(404).send('서버를 확인해주세요.');
//   }

//   return res.status(505).send('잘못된 요청이 존재합니다.');
// };
