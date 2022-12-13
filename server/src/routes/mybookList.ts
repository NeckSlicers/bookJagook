import express from 'express';
import { PATH } from '../api';

const router = express();

router.get(PATH.ROOT, (req, res) =>
  res.json({
    totalPage: 10,
    page: 1,
    resultItem: 10,
    items: [
      {
        id: 1,
        bookImg:
          'https://image.aladin.co.kr/product/25155/25/letslook/K282633473_b.jpg',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=251552545',
        title: '모던 딥다이브',
        author: '이웅모 (지은이)',
        description:
          '자바스크립트를 둘러싼 기본 개념을 정확하고 구체적으로 설명하고, 자바스크립트 코드의 동작 원리를 집요하게 파헤친다.',
        publisher: '위키북스',
        priceStandard: 45000,
        priceSales: 40500,
        isReport: true,
        star: 5,
      },
    ],
  }),
);

export { router as mybookListRouter };
