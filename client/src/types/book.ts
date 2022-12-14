interface AladinBook {
  isbn13: string;
  cover: string;
  link: string;
  title: string;
  author: string;
  description: string;
  publisher: string;
  priceStandard: number;
  priceSales: number;
}

interface BookItem {
  id: string;
  bookImg: string;
  link: string;
  title: string;
  author: string;
  description: string;
  publisher: string;
  priceStandard: number;
  priceSales: number;
}

export type { AladinBook, BookItem };
